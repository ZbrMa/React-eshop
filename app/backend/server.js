const { error } = require('console');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const ip = 'localhost';

const corsOptions = {
  credentials: true,
  origin: [`http://${ip}:3000`, `http://${ip}:`]
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'moje_heslo',
    database: 'kuze',
    port: 3306,
    ssl:null
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
      user: 'zbranek.m@gmail.com',
      pass: 'kbua evoe lgbp muia'
  },
  tls: {
    rejectUnauthorized: false
  }
});

db.connect((err) => {
    if (err) {
      console.error('Chyba připojení k databázi:', err);
      process.exit(1);
    }
    console.log('Úspěšně připojeno k databázi');
  });

  app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
  });

  app.post('/user_login', async (req, res) => {
    const { username, password } = req.body;
    let user;
    query = 'SELECT username, password FROM users WHERE username = ?'

    db.query(query,username, async(err,result) =>{
      if(err){
        console.log(err);
        return res.status(401).send('Login error');
      };
      if (result.length > 0) {
        user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        } else {
            const token = jwt.sign({ username }, 'secret_key', { expiresIn: '30m' });
            return res.json({ username: username, token: token });
        }
      } 
      else {
          return res.status(401).send('Invalid credentials');
      }
    });
  });

  app.post('/produkty',(req,res)=>{
    const categoryId = req.body.category;
    const sexId = req.body.sex;

    let query= `SELECT p.id, p.cena, po.obrazek, p.popis, p.jmeno, k.jmeno AS kategorie
        FROM produkty p
        LEFT JOIN kategorie k ON p.kategorie = k.id
        LEFT JOIN produkty_obrazky po ON p.id = po.produkt_id
        WHERE po.titulni = 1
        `;

    let queryParams = [];
    let whereClauses = [];

    if (categoryId.length > 0) {
      const placeholders = categoryId.map(() => '?').join(', ');
      whereClauses.push(`k.id ${categoryId.length === 1 ? '=' : 'IN'} (${placeholders})`);
      queryParams.push(...categoryId);
    };
  
    if (sexId.length > 0) {
      const placeholders = sexId.map(() => '?').join(', ');
      whereClauses.push(`p.pohlavi ${sexId.length === 1 ? '=' : 'IN'} (${placeholders})`);
      queryParams.push(...sexId);
    };

    const whereClause = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
    query += whereClause;

    db.query(query,queryParams,(err,results)=>{
        if(err){
            console.log(err);
            return res.status(500).json(null);
        };
        if (results.length === 0) {
            return res.status(200).json(null);
        }
        else {return res.status(200).json(results)};
    });
  });

  app.get('/kategorie',(req,res)=>{
    let query = 'SELECT * FROM kategorie'
    db.query(query,(err,results)=>{
      if(err){
        return res.status(500).json(null);
      };
      if (results.length === 0) {
          return res.status(200).json(null);
      }
      else {return res.status(200).json(results)};
    });
  });

  app.get('/pohlavi',(req,res)=>{
    let query = 'SELECT * FROM pohlavi'
    db.query(query,(err,results)=>{
      if(err){
        return res.status(500).json(null);
      };
      if (results.length === 0) {
          return res.status(200).json(null);
      }
      else {return res.status(200).json(results)};
    });
  });

  app.post('/produkt_detail', async (req, res) => {
    const prodId = req.body.prod;

    try {
        const queryProductDetail = `
            SELECT p.id, p.cena, p.popis, p.jmeno, k.jmeno AS kategorie, p.pohlavi AS sex
            FROM produkty p
            LEFT JOIN kategorie k ON p.kategorie = k.id
            WHERE p.id = ?`;

        const [productDetail] = await new Promise((resolve, reject) => {
            db.query(queryProductDetail, [prodId], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        const queryProductImages = `
            SELECT obrazek
            FROM produkty_obrazky
            WHERE produkt_id = ?`;

        const productImages = await new Promise((resolve, reject) => {
            db.query(queryProductImages, [prodId], (err, results) => {
                if (err) return reject(err);
                resolve(results.map(row=>row.obrazek));
            });
        });

        const finalResult = {
            ...productDetail,
            images: productImages
        };

        res.status(200).json(finalResult);

    } catch (error) {
        console.error('Error při fetchování:', error);
        res.status(500).json(null);
    }
});

  app.post('/produkt_velikost',(req,res)=>{
    const prodId = req.body.prod;
    let query = `SELECT DISTINCT pv.velikost, pv.delka, pv.sirka, pv.hloubka
        FROM produkt_varianty pv
        WHERE pv.produkt_id = ? `;
    
        db.query(query,prodId,(err,results)=>{
          if(err){
            return res.status(500).json(null);
          }
          else {return res.status(200).json(results)};
        });
  });

  app.post('/send_message',async (req,res)=>{
    const {name,surname,email,phone,text} = req.body;

    const mailOptions = {
      from: email,
      to: 'zbranek.m@gmail.com',                       
      subject: 'Zpráva z e-shopu',             
      text: `Jméno: ${name} ${surname}
            Telefon: ${phone}
            ${text}`                    
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Zpráva byla odeslána.');
    } catch (error) {
      console.log(error);
        res.status(500).send('Zprávu se nepodařilo odeslat. Zkuste to později.');
    };
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    });
  };

  app.listen(port,ip, () => {
    console.log(`Server běží na http://${ip}:${port}`);
  });