import React from "react";
import '../styles/MonParcoursRectangle.css';
import { Icon } from '@iconify/react';

class MonParcoursRectangle extends React.Component {
    render() {
        return (
            <div>
                <div className="div-Mon-Parcours">
                    <h1 className="h1-Mon-Parcours">Mon parcours</h1>

                    <div className="div-frise-chrono">
                        <div id="div-annee-frise"><h1 id="h1-annee-frise">2017</h1></div>
                        <div id="div-annee-frise"><h1 id="h1-annee-frise">2020</h1></div>
                        <div id="div-annee-frise"><h1 id="h1-annee-frise">2021</h1></div>
                        <div id="div-annee-frise"><h1 id="h1-annee-frise">2022</h1></div>
                    </div>

                    <div className="ligne-2017"></div>
                    <div className="div-desc-2017">
                        <p>Obtention de mon baccalauréat<br/> scientifique spécialité physique<br/> chimie avec mention bien</p>
                    </div>

                    <div className="ligne-2020"></div>
                    <div className="div-desc-2020">
                        <p>Obtention d’un Diplôme Universitaire<br/> Technologique (DUT) en Réseaux<br/> et Télécommunications à la Réunion</p>
                    </div>

                    <div className="ligne-2021"></div>
                    <div className="div-desc-2021">
                        <p>Première année de cycle ingénieur<br/> d’informatique et gestion à Polytech<br/> Montpellier</p>
                    </div>

                    <div className="ligne-2022"></div>
                    <div className="div-desc-2022">
                        <p>Actuellement en deuxième année du<br/> cycle ingénieur d’informatique et<br/> gestion</p>
                    </div>

                </div>
                <Icon icon="vaadin:diploma" color="black" height="100" className="icon-diploma" />
                <Icon icon="bi:mortarboard-fill" color="black" height="100" className="icon-mortarboard" />
                <Icon icon="fa-solid:laptop-code" color="black" height="100" className="icon-laptop" />
                <Icon icon="icon-park:code-brackets" color="black" height="100" className="icon-brackets" />
            </div>
        );
    }
}

export default MonParcoursRectangle;