import React from "react";
import '../styles/MonParcoursRectangle.css'

class MonParcoursRectangle extends React.Component {
    render() {
        return (
            <div className="div-Mon-Parcours">
                <h1 className="h1-Mon-Parcours">Mon parcours</h1>
                
                <div className="div-frise-chrono">
                    <div><h1>2017</h1></div>
                    <div><h1>2020</h1></div>
                    <div><h1>2021</h1></div>
                    <div><h1>2022</h1></div>
                </div>
            </div>
        );
    }
}

export default MonParcoursRectangle;