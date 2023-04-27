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

const Contact = () => {
    const [theme] = useThemeHook();
    const { ref: headerAni, inView: headerAniVisible } = useInView();
    const { contentLang } = useContext(MainContext);

    useEffect(() => {
        document.title = "Superfront | Contact";
    });

    return (
        <div className='contact'>
            <section className='about' ref={headerAni}>
                <div className='content contact-padding'>
                    <img src='https://i.ibb.co/2YTcPgn/Untitled.png' data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" data-aos={`${headerAniVisible ? "" : "flip-left"}`} />

                    <div className={`${theme ? 'text-light' : 'text-black'} product-details text`}>
                        <h1 className={`${theme? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block header-tag`}>
                            {contentLang.contact}
                        </h1>
                        <div className='right'>
                            <input type='text' className={`${theme? 'field-background field-background:hover' : 'field'}`} placeholder={contentLang.name} />
                            <input type='email' className={`${theme? 'field-background field-background:hover' : 'field'}`} placeholder={contentLang.email} />
                            <input type='number' className={`${theme? 'field-background field-background:hover' : 'field'}`} placeholder={contentLang.number} />
                            <textarea className={`${theme? 'field-background field-background:hover' : 'field'}`} placeholder={contentLang.message}></textarea>
                            <button className='btn'>{contentLang.send}</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;