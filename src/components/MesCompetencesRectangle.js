import React from "react";
import '../styles/MesCompetencesRectangle.css';
import { Icon } from '@iconify/react';

class MesCompetencesRectangle extends React.Component {
    render() {
        return (
            <div>   
                <div className="div-mes-competences">
                    <h1 className="titre-mes-competences">Mes compétences</h1>

                    <ul className="ul-mes-competences">
                        <li>Dévelopemment d’application avec Java et<br/> d’interface graphique JavaFX</li><br/>
                        <li>Dévelopemment de site web avec HTML, CSS, <br/> React, Bootstrap, JavaScript</li><br/>
                        <li>Bonne maîtrise du SQL (Serial Query Language)</li><br/>
                        <li>Analayse de données à l’aide des langages <br/> de programmation Python et R, et réalisation de <br/> dashboard interactif avec Rshiny</li><br/>
                        <li>Bonne maîtrise du langage C, programmation <br/> réseau avec des sockets</li>
                    </ul>
                </div>

                <Icon icon="akar-icons:python-fill" color="black" height="100" className="icon-python" />
                <Icon icon="cib:java" color="black" height="100" className="icon-java" />
                <Icon icon="akar-icons:javascript-fill" color="black" height="100" className="icon-javascript" />
                <Icon icon="akar-icons:react-fill" color="black" height="100" className="icon-react" />
                <Icon icon="codicon:terminal-linux" color="black" height="100" className="icon-linux" />
                <Icon icon="akar-icons:html-fill" color="black" height="100" className="icon-html" />
                <Icon icon="akar-icons:css-fill" color="black" height="100" className="icon-css" />
                <Icon icon="carbon:logo-r-script" color="black" height="100" className="icon-r" />
                <Icon icon="akar-icons:github-fill" color="black" height="100" className="icon-github" />
                <Icon icon="simple-icons:mysql" color="black" height="100" className="icon-sql" />
                <Icon icon="teenyicons:c-solid" color="black" height="100" className="icon-c" />
            </div>
        );
    }
}

export default MesCompetencesRectangle;