import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { MainContext, useContext } from '../context';

const About = () => {
    const [theme] = useThemeHook();
    const { ref: headerAni, inView: headerAniVisible } = useInView();
    const { contentLang } = useContext(MainContext);

    useEffect(() => {
        document.title = "Superfront | About";
    });

    return (
        <>
            <section className='about' ref={headerAni}>
                <div className='content'>
                    <img src='https://i.ibb.co/2YTcPgn/Untitled.png' data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" data-aos={`${headerAniVisible ? "" : "flip-left"}`} />

                    <div className={`${theme ? 'text-light' : 'text-black'} product-details text`}>
                        <h1 className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
                            {contentLang.aboutUs}
                        </h1>
                        <h5>
                            {contentLang.aboutCom}
                        </h5>
                        <p>
                            {contentLang.aboutCom2}
                        </p>
                        <button type='button'>{contentLang.homePage}</button>
                    </div>
                </div>
            </section>
            <div style={{ width: '100%' }} className='iframe'><iframe width="1100" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1100&amp;height=350&amp;hl=en&amp;q=matrix%20training+(Matrix%20Training%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>

            
        </>
    );
};

export default About;