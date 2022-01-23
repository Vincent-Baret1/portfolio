import React from "react";
import '../styles/CentreInteretRectangle.css';
import { Icon } from '@iconify/react';

class CentreInteretRectangle extends React.Component {
    render() {
        return (
            <div>
                <div className="div-mes-interets">
                    <p className="p-desc-interet">Passionné de course à pied / trail en montagne <br/> <br/>

                        “ Étant originaire de l’île de la Réunion, j’ai toujours adoré pratiquer le trail pour la découverte de paysage et la sensation de liberté ”
                    </p>
                </div>
                <div className="div-titre">
                </div>
                <h1 className="h1-titre-interet">Mes centres d'intérêts</h1>
                <Icon icon="maki:mountain" color="black" height="100" className="icon-mountain" />
            </div>
        );
    }
}

export default CentreInteretRectangle;