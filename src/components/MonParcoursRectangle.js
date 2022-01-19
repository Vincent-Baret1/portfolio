import React from "react";
import '../styles/MonParcoursRectangle.css'

class MonParcoursRectangle extends React.Component {
    render() {
        return (
            <div className="div-Mon-Parcours">
                <h1 className="h1-Mon-Parcours">Mon parcours</h1>
                
                <div className="div-frise-chrono">
                    <div id="div-annee-frise"><h1 id="h1-annee-frise">2017</h1></div>
                    <div id="div-annee-frise"><h1 id="h1-annee-frise">2020</h1></div>
                    <div id="div-annee-frise"><h1 id="h1-annee-frise">2021</h1></div>
                    <div id="div-annee-frise"><h1 id="h1-annee-frise">2022</h1></div>
                </div>

                <div className="ligne-2017"></div>
              
            </div>
        );
    }
}

export default MonParcoursRectangle;