import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import '../styles/Footer.css';
import emailjs from '@emailjs/browser';

function Footer() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showAlertGood, setShowAlertGood] = useState(false);
    const [showAlertBad, setShowAlertBad] = useState(false);

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_3blx0vm', 'template_7ynb77q', e.target, 'user_DeROiLkdZDjLlpaJdq6MC')
            .then(function (response) {
                setShowAlertGood(true);
            }, function (error) {
                setShowAlertBad(true);
            });

        document.getElementById('form-contact').reset();
    };


    return (
        <div className="div-footer">
            <div>
                <p className="p-info-footer">
                    Vincent Baret <br /><br />

                    Mail : vincent.baret@etu.umontpellier.fr <br /><br />

                    Tél : 07 66 43 70 04 <br /><br />
                </p>
            </div>
            <div className="div-form">
                <Form id="form-contact" onSubmit={sendEmail}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nom : </Form.Label>
                        <Form.Control name="from_name" type="textArea" placeholder="Votre nom" onChange={(e) => setNom(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email : </Form.Label>
                        <Form.Control name="email" type="email" placeholder="Votre email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Message : </Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} placeholder="Votre message" />
                    </Form.Group>

                    <Button variant="light" type="submit">
                        Envoyer
                    </Button>
                </Form>
                <Alert variant="success" show={showAlertGood} onClose={() => setShowAlertGood(false)} dismissible>
                    Merci pour votre message !
                </Alert>

                <Alert variant="danger" show={showAlertBad} onClose={() => setShowAlertBad(false)} dismissible>
                    Une erreur s'est produite, veuillez réessayer...
                </Alert>
            </div>
            <p className="p-droits">2022 - Vincent Baret - Tous droits réservés ©</p>
        </div>
    );
}

export default Footer;