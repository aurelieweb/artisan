import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import DemandeIntervention from './pages/DemandeIntervention'; // Importer le composant de la page de demande d'intervention
import UserInterface from './pages/UserInterface';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Accueil />} />
          
          {/* Route de la page de demande d'intervention */}
          <Route path="/demande-intervention" element={<DemandeIntervention />} />

          {/* Route de la page de l'interface utilisateur */}
          <Route path="/interface-utilisateur" element={<UserInterface />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
