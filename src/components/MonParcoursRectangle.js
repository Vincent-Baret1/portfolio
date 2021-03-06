import React from "react";
import '../styles/MonParcoursRectangle.css';
import { Icon } from '@iconify/react';
import $ from 'jquery';

function MonParcoursRectangle() {

    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();
        
        if (scrollPos > 130) {
            $('.icon-diploma').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-diploma'
            })

            $('.icon-mortarboard').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-mortarboard'
            })

            $('.icon-laptop').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-laptop'
            })

            $('.icon-brackets').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-brackets'
            })

            $('.div-desc-2017').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-div-2017'
            })

            $('.div-desc-2020').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-div-2020'
            })

            $('.div-desc-2021').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-div-2021'
            })

            $('.div-desc-2022').css({
                'animation-duration': 3 + 's',
                'animation-name': 'anim-div-2022'
            })
            
        }
    })

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
                    <p>Obtention de mon baccalaur??at<br /> scientifique sp??cialit?? physique<br /> chimie avec mention bien</p>
                </div>

                <div className="ligne-2020"></div>
                <div className="div-desc-2020">
                    <p>Obtention d???un Dipl??me Universitaire<br /> Technologique (DUT) en R??seaux<br /> et T??l??communications ?? la R??union</p>
                </div>

                <div className="ligne-2021"></div>
                <div className="div-desc-2021">
                    <p>Premi??re ann??e de cycle ing??nieur<br /> d???informatique et gestion ?? Polytech<br /> Montpellier</p>
                </div>

                <div className="ligne-2022"></div>
                <div className="div-desc-2022">
                    <p>Actuellement en deuxi??me ann??e du<br /> cycle ing??nieur d???informatique et<br /> gestion</p>
                </div>

            </div>
            <Icon icon="vaadin:diploma" color="black" height="100" className="icon-diploma" />
            <Icon icon="bi:mortarboard-fill" color="black" height="100" className="icon-mortarboard" />
            <Icon icon="fa-solid:laptop-code" color="black" height="100" className="icon-laptop" />
            <Icon icon="icon-park:code-brackets" color="black" height="100" className="icon-brackets" />
        </div>
    );
}

export default MonParcoursRectangle;