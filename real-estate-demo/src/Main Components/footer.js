import React from 'react';

function Footer(){
    return(
            <div className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <div className="footer_logo">
                                        <a href="#">
                                            <img src={require("./../assets/images/footer_logo.png")} alt=""/>
                                        </a>
                                    </div>
                                    <p>
                                            <a href="#">abcdef@support.com</a> <br/>
                                            +91 123 123 1234 <br/>
                                            600/D, ABCD road, Mumbai
                                    </p>
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-twitter-alt"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                            Services
                                    </h3>
                                    <ul>
                                        <li><a href="#">Marketing &amp; SEO</a></li>
                                        <li><a href="#"> Startup</a></li>
                                        <li><a href="#">Finance solution</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Travel</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-2">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                            Useful Links
                                    </h3>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#"> Contact</a></li>
                                        <li><a href="#">Appointment</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div className="footer_widget">
                                            <h3 className="footer_title">
                                                    Subscribe
                                            </h3>
                                            <form action="#" className="newsletter_form">
                                                <input type="text" placeholder="Enter your mail"/>
                                                <button type="submit">Subscribe</button>
                                            </form>
                                            <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center">
                                    Copyright ©2020 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by AYAN MAITY.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer;