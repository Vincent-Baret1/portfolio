import React from "react";
import '../styles/TopRectangle.css';
import developer from '../images/web-developer.svg';


class TopRectangle extends React.Component {
    render() {
        return (
            <div className="div-principal">
                <div className="div-title">
                    <h1>Vincent<br />Baret</h1>
                    <p className="p-desc-title">Étudiant ingénieur - Polytech Montpellier</p>
                </div>
                    
                <div className="vertical-line"></div>

                <div id="ball" className="ball-MonParcours">
                        <p id="p-white-ball">Mon parcours </p>
                </div>
                <div id="ball" className="ball-ExpPro">
                        <p id="p-white-ball">Mes expériences professionnelles</p>
                </div>
                <div id="ball" className="ball-Competences">
                        <p id="p-white-ball">Mes compétences</p>
                </div>
                <div id="ball" className="ball-CentreInteret">
                        <p id="p-white-ball">Mes centres d'intérêts</p>
                </div>

                <img src={developer} alt="image" />
            </div>


        );
    }
}

export default TopRectangle;