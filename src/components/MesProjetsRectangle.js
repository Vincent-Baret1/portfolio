import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import '../styles/MesProjetsRectangle.css';
import $ from 'jquery';

function MesProjetsRectangle() {
    

    $(window).scroll(function() {

        var scrollPos = $(this).scrollTop();

        if(scrollPos > 1700){
            $('.card-java').css({
                'animation-duration': 3 + 's',
                'animation-name': 'moveCard'
            })

            $('.card-react-js').css({
                'animation-duration': 3 + 's',
                'animation-name': 'moveCard'
            })

            $('.card-python').css({
                'animation-duration': 3 + 's',
                'animation-name': 'moveCard'
            })
        }
    })

    return (
        <div className="div-mes-projets">
            <h1 className="h1-div-mes-projets">Mes projets pendant les études</h1>
            <div>
                <Card id="card" className="card-java">
                    <Card.Body>
                        <Card.Title id="card-title">Java</Card.Title>
                        <Card.Text id="card-text"> Application Java dans le cadre d’un projet sur les design patterns et design principles</Card.Text>
                    </Card.Body>
                </Card>


                <Card id="card" className="card-react-js">
                    <Card.Body>
                        <Card.Title id="card-title">React JS / Firebase</Card.Title>
                        <Card.Text id="card-text">Réalisation d'un site web dynamique à l'aide de React JS et Firebase</Card.Text>
                    </Card.Body>
                </Card>

                <Card id="card" className="card-python">
                    <Card.Body>
                        <Card.Title id="card-title">Python Dash / Plotly</Card.Title>
                        <Card.Text id="card-text">Projet de datascience avec réalisation de dashboard en python</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );

}

export default MesProjetsRectangle;