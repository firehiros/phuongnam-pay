import React from 'react';

const Component = ({ ...props }) => {
    return (
        <div id="carousel-home">
            <div className="owl-carousel owl-theme">
                <div className="owl-slide cover lazy" data-bg="url(img/slides/slide_home_1.jpg)">
                    <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div className="container">
                            <div className="row justify-content-center justify-content-md-end">
                                <div className="col-lg-6 static">
                                    <div className="slide-text text-right white">
                                        <h2 className="owl-slide-animated owl-slide-title">Taste<br />unique food</h2>

                                        <p className="owl-slide-animated owl-slide-subtitle">
                                            Cooking delicious food since 2005
                                        </p>
                                        <div className="owl-slide-animated owl-slide-cta"><a className="btn_1 btn_scroll" href="menu-1.html" role="button">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="icon_drag_mobile"></div>
        </div>
    );
};

export default Component;
