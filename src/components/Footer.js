import React from "react";
import { Link } from "@reach/router";
import { MainContext, useContext } from '../context';

const Footer = () => {

    const { contentLang } = useContext(MainContext);


    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>
                            {contentLang.business}
                        </h4>
                        <a href="/about">
                            <p>{contentLang.business}</p>
                        </a>
                        <a href="/about">
                            <p>{contentLang.business}</p>
                        </a>
                        <a href="/about">
                            <p>{contentLang.business}</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>
                            {contentLang.resources}
                        </h4>
                        <a href="/about">
                            <p>{contentLang.resources}</p>
                        </a>
                        <a href="/about">
                            <p>{contentLang.resources}</p>
                        </a>
                        <a href="/about">
                            <p>{contentLang.resources}</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>
                            {contentLang.partners}
                        </h4>
                        <a href="/employer">
                            <p>{contentLang.partners}</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>
                            {contentLang.company}
                        </h4>
                        <Link
                            to="/about"
                        >
                            <p>{contentLang.aboutUs}</p>
                        </Link>
                        <Link
                            to="/contact"
                        >
                            <p>{contentLang.contact}</p>
                        </Link>
                        <Link
                            to="/about"
                        >
                            <p>{contentLang.company}</p>
                        </Link>
                        <Link
                            to="/contact"
                        >
                            <p>{contentLang.company}</p>
                        </Link>
                        
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>
                            {contentLang.coming}
                        </h4>
                        <div className="socialmedia">
                            <p><img src="https://i.ibb.co/1LdkBqQ/facebook.png" alt="" /></p>
                            <p><img src="https://i.ibb.co/TRtDSgK/twitter.png" alt="" /></p>
                            <p><img src="https://i.ibb.co/1Qc5SQw/linkedin.png" alt="" /></p>
                            <p><img src="https://i.ibb.co/4FRyss3/instagram.png" alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} {contentLang.right}
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <Link
                            to="/wishlist"
                        >
                            <span>{contentLang.terms}</span>
                        </Link>
                        <Link
                            to="/wishlist"
                        >
                            <span>{contentLang.privacy}</span>
                        </Link>
                        <Link
                            to="/wishlist"
                        >
                            <span>{contentLang.security}</span>
                        </Link>
                        <Link
                            to="/about"
                        >
                            <span>{contentLang.cookie}</span>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;