import React, { useEffect } from 'react';
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
import { Sprava } from './pages/Sprava';
import useIdleTimeout from './utils/inactivity';
import useTokenCheck from './hooks/tokenCheck';
import ProtectedRoute from './components/common/protectedRoute';

const App: React.FC = () => {
  useIdleTimeout(30 * 60 * 1000);
  useTokenCheck();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Domu />} />
        <Route path="/produkty" element={<FilterProvider><Produkty/></FilterProvider>}/>
        <Route path="/produkt" element={<Produkt />} />
        <Route path="/vyroba" element={<Vyroba />} />
        <Route path="/kontakt" element={<Kontakt />}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/sprava" element={<FilterProvider><Sprava/></FilterProvider>}>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
