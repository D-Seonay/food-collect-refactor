import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage'; // Assurez-vous que le chemin est correct
import Offers from './pages/OffersPage'; // Créez également ces pages si elles n'existent pas
import Solutions from './pages/SolutionsPage';
import Restaurant from './pages/RestaurantPage';
import Error404 from './pages/Error/Error404'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-offres" element={<Offers />} /> 
          <Route path="/nos-solutions" element={<Solutions />} />
          <Route path="/restaurant" element={<Restaurant />} />

          {/* Ajoutez la route pour la page Erreur404 */}

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;