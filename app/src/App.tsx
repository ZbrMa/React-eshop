import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Domu } from './pages/Domu';
import { Produkty } from './pages/Produkty';
import './global.css';
import '../src/components/unclassified.css';
import { Produkt } from './pages/Produkt';
import { FilterProvider } from './context/productFilter';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Domu/>} />
        <Route path="/produkty" element={<FilterProvider><Produkty/></FilterProvider>}/>
        <Route path="/produkt" element={<Produkt/>} />
      </Routes>
    </Router>
  );
}

export default App;
