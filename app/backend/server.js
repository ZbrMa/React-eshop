const { error } = require('console');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 5000;
const ip = 'localhost';

const corsOptions = {
  credentials: true,
  origin: [`http://${ip}:3000`, `http://${ip}:`]
};

app.use(express.json());
app.use(cors(corsOptions))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'moje_heslo',
    database: 'kuze',
    port: 3306,
    ssl:null
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
            const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
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
    let queryParams = [];
    let query= `SELECT p.id, p.cena, p.obrazek, p.popis, p.jmeno, k.jmeno AS kategorie
        FROM produkty p
        LEFT JOIN kategorie k ON p.kategorie = k.id
        `;

    if(categoryId && categoryId.length > 0){
      query += ' WHERE'
      if(sexId.length === 1){
        query += ' k.id = ?';
      }
      else {
        const placeholders = categoryId.map(() => '?').join(', ');
        query += ` k.id IN (${placeholders})`;
      };
      queryParams = queryParams.concat(categoryId);
    };

    if(sexId && sexId.length > 0){
      if(sexId.length === 1){
        query += ' AND p.pohlavi = ?';
      }
      else {
        const placeholders = sexId.map(() => '?').join(', ');
      query += ` AND p.pohlavi IN (${placeholders})`;
      };
      queryParams = queryParams.concat(sexId);
    };

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
      if (res.length === 0) {
          return res.status(200).json(null);
      }
      else {return res.status(200).json(results)};
    });
  });

  app.post('/produkt_detail',(req,res)=>{
    const prodId = req.body.prod;
    let query = `SELECT p.id, p.cena, p.obrazek, p.popis, p.jmeno, k.jmeno AS kategorie, p.pohlavi AS sex
        FROM produkty p
        LEFT JOIN kategorie k ON p.kategorie = k.id
        WHERE p.id = ? `;
    
        db.query(query,prodId,(err,results)=>{
          if(err){
            return res.status(500).json(null);
          }
          else {return res.status(200).json(results[0])};
        });
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

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    });
  };

  app.listen(port,ip, () => {
    console.log(`Server běží na http://${ip}:${port}`);
  });