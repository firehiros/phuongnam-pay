// React Import
import React from 'react';

const Component = ({ ...props }) => {
    return (
        <footer>
            <div className="frame black"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="footer_wp">
                            <i className="icon_pin_alt"></i>
                            <h3>Address</h3>
                            <p>97845 Baker st. 567<br />Los Angeles - US</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="footer_wp">
                            <i className="icon_tag_alt"></i>
                            <h3>Reservations</h3>
                            <p><a href="tel:009442323221">+94 423-23-221</a><br /><a href="#0">reservations@Foores.com</a></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="footer_wp">
                            <i className="icon_clock_alt"></i>
                            <h3>Opening Hours</h3>
                            <ul>
                                <li>Mon - Sat: 10am - 11pm</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <h3>Keep in touch</h3>
                        <div id="newsletter">
                            <div id="message-newsletter"></div>
                            <form method="post" action="phpmailer/newsletter_template_email.php" name="newsletter_form"
                                id="newsletter_form">
                                <div className="form-group">
                                    <input type="email" name="email_newsletter" id="email_newsletter" className="form-control"
                                        placeholder="Your email" />
                                    <button type="submit" id="submit-newsletter"><i className="arrow_carrot-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-sm-5">
                        <p className="copy">© 2021 Foores Restaurant - All rights reserved</p>
                    </div>
                    <div className="col-sm-7">
                        <div className="follow_us">
                            <ul>

                                <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="/img/twitter_icon.svg" alt="" className="lazy"/></a></li>
                                <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="/img/facebook_icon.svg" alt="" className="lazy"/></a></li>
                                <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="/img/instagram_icon.svg" alt="" className="lazy"/></a></li>
                                <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="/img/youtube_icon.svg" alt="" className="lazy"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center"></p>
            </div>
        </footer>

    );
};

export default Component;
