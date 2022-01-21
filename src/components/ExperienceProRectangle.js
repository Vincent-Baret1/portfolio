import React from "react";
import '../styles/ExperienceProRectangle.css';
import { Icon } from '@iconify/react';

class ExperienceProRectangle extends React.Component {
    render() {
        return (
            <div>
                <div className="div-exp-pro-1-gauche">
                    <h1 className="titre-div-1">Expérience professionnelle <br /> <br />
                        Stage de fin d’étude de DUT
                    </h1>

                    <ul className="ul-div-1">
                        <li>En 2020</li>
                        <li>Durée : 12 semaines</li>
                        <li>Direction des systèmes d’information (DSI) de l’Université de la Réunion</li>
                    </ul>
                </div>

                <div className="div-exp-pro-2-droite">
                    <h1 className="titre-div-2">Mise en place d’un VPN IPsec <br />
                        entre sites distants de l’université.
                    </h1>

                    <ul className="ul-div-2">
                        <li>Utilisation d’OPNsense : logiciel de<br />
                            pare-feu et de routage open source
                        </li>
                    </ul>

                    <p className="desc-stage-div-2">
                        “Ce stage a été pour moi l’occasion de <br />
                        développer de nouvelles compétences <br />
                        techniques, mais surtout il m’a permis de <br />
                        découvrir le monde de l’entreprise. ”
                    </p>
                </div>
                <Icon icon="ic:outline-vpn-lock" color="black" height="100" className="icon-vpn" />
            </div>
        );
    }
}

export default ExperienceProRectangle;