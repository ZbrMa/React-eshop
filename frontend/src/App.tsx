import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Domu } from './pages/Domu';
import { Products } from './pages/Products';
import './global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Domu/>} />
        <Route path="/produkt" element={<Products/>} />
      </Routes>
    </Router>
  );
}

export default App;
