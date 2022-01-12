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
                    <a href="#">
                        <p id="p-white-ball">Mon parcours </p>
                    </a>
                </div>
                <div id="ball" className="ball-ExpPro">
                    <a href="#">
                        <p id="p-white-ball">Mes expériences professionnelles</p>
                    </a>
                </div>
                <div id="ball" className="ball-Competences">
                    <a href="#">
                        <p id="p-white-ball">Mes compétences</p>
                    </a>
                </div>
                <div id="ball" className="ball-CentreInteret">
                    <a href="#">
                        <p id="p-white-ball">Mes centres d'intérêts</p>
                    </a>
                </div>

                <img src={developer} alt="image" />
            </div>


        );
    }
}

export default TopRectangle;