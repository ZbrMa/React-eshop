import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Domu } from './pages/Domu';
import { Produkty } from './pages/Produkty';
import './global.css';
import '../src/components/unclassified.css';
import { Produkt } from './pages/Produkt';
import { FilterProvider } from './context/productFilter';
import { Vyroba } from './pages/Vyroba';
import { Kontakt } from './pages/Kontakt';
import useIdleTimeout from './utils/inactivity';
import useTokenCheck from './hooks/tokenCheck';

const App: React.FC = () => {
  useIdleTimeout(5 * 60 * 1000);
  useTokenCheck();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Domu/>} />
        <Route path="/produkty" element={<FilterProvider><Produkty/></FilterProvider>}/>
        <Route path="/produkt" element={<Produkt/>} />
        <Route path="/vyroba" element={<Vyroba/>} />
        <Route path="/kontakt" element={<Kontakt/>}/>
      </Routes>
    </Router>
  );
}

export default App;
