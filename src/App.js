import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopRectangle from './components/TopRectangle';
import MonParcoursRectangle from './components/MonParcoursRectangle';
import ExperienceProRectangle from './components/ExperienceProRectangle';
import MesProjetsRectangle from './components/MesProjetsRectangle';
import MesCompetencesRectangle from './components/MesCompetencesRectangle';
import CentreInteretRectangle from './components/CentreInteretRectangle';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <TopRectangle className="topRectangle" />
        <MonParcoursRectangle className="MonParcoursRectangle" />
        <ExperienceProRectangle />
        <MesProjetsRectangle />
        <MesCompetencesRectangle />
        <CentreInteretRectangle />
        <Footer />
    </div>
  );
}

export default App;
