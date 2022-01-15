import React from 'react';

const Component = ({ ...props }) => {
    return (
        <div className="pattern_2">
            <div className="container margin_60_40" data-cue="slideInUp">

                <div className="main_title center mb-5">
                    <span><em></em></span>
                    <h2>Our Daily Menu</h2>
                </div>
                <div className="tabs_menu add_bottom_25">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">Starters</a>
                        </li>
                        <li className="nav-item">
                            <a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">Main Dishes</a>
                        </li>
                        <li className="nav-item">
                            <a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">Desserts</a>
                        </li>
                    </ul>
                    <div className="tab-content add_bottom_25" role="tablist">
                        <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                            <div className="card-header" role="tab" id="heading-A">
                                <h5>
                                    <a className="collapsed" data-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                                        Starters
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-A" className="collapse" role="tabpanel" aria-labelledby="heading-A">
                                <div className="card-body">
                                    <div className="banner lazy" data-bg="url(img/banner_bg_2.jpg)">
                                        <div className="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                                            <div>
                                                <small>Starters Special Offer</small>
                                                <h3>Mix Starters Menu $18 only</h3>
                                                <p>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                                                <a href="reservations.html" className="btn_1">Reserve now</a>
                                            </div>
                                            <figure className="d-none d-lg-block"><img src="/img/banner.svg" alt="" width="200" height="200" className="img-fluid" /></figure>
                                        </div>
                                    </div>

                                    <div className="row magnific-gallery add_top_30">
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/1.jpg" title="Soft shell crab" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/1.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Soft shell crab</h3><em>$14</em>
                                                </div>
                                                <p>Chicken, Potato, Salad</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/2.jpg" title="Marinated Grilled" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/2.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Marinated Grilled Shrimp</h3><em>$11</em>
                                                </div>
                                                <p>Fresh Shrimp, Oive Oil, Tomato Sauce</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/3.jpg" title="Avocado & Mango Salsa" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/3.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Avocado & Mango Salsa</h3><em>$16</em>
                                                </div>
                                                <p>Avocado, Mango, Tomatoes</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/4.jpg" title="Baked Potato Skins" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/4.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Baked Potato Skins</h3><em>$10</em>
                                                </div>
                                                <p>Potatoes, Oil, Garlic</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/5.jpg" title="Braised Pork Chops" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/5.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Braised Pork Chops</h3><em>$12</em>
                                                </div>
                                                <p>Pork chops, Olive oil, Garlic</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/6.jpg" title="Cream of Asparagus" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/6.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Cream of Asparagus</h3><em>$14</em>
                                                </div>
                                                <p>Asparagus, Ootato, Celery, Onion</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                            <div className="card-header" role="tab" id="heading-B">
                                <h5>
                                    <a className="collapsed" data-toggle="collapse" href="#collapse-B" aria-expanded="false" aria-controls="collapse-B">
                                        Main Dishes
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
                                <div className="card-body">
                                    <div className="banner lazy" data-bg="url(img/banner_bg.jpg)">
                                        <div className="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                                            <div>
                                                <small>Special Offer</small>
                                                <h3>Burgher Menu $14 only</h3>
                                                <p>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                                                <a href="reservations.html" className="btn_1">Reserve now</a>
                                            </div>
                                            <figure className="d-none d-lg-block"><img src="/img/banner.svg" alt="" width="200" height="200" className="img-fluid" /></figure>
                                        </div>

                                    </div>

                                    <div className="row magnific-gallery add_top_30">
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/7.jpg" title="Prime Rib" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/7.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Prime Rib</h3><em>$18</em>
                                                </div>
                                                <p>Rib, Rosemary, Black pepper</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/8.jpg" title="Coconut Fried Chicken" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/8.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Coconut Fried Chicken</h3><em>$14</em>
                                                </div>
                                                <p>8 chicken pieces, Coconut milk</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/9.jpg" title="Sriracha Beef Skewers" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/9.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Sriracha Beef Skewers</h3><em>$12</em>
                                                </div>
                                                <p>Beef, Garlic, Sesame oil</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/10.jpg" title="Chicken with Garlic" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/10.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Chicken with Garlic</h3><em>$10</em>
                                                </div>
                                                <p>Chicken, Cherry tomatoes, Olive oil</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/11.jpg" title="Soft shell crab" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/11.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Soft shell crab</h3><em>$14</em>
                                                </div>
                                                <p>Chicken, Potato, Salad</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/1.jpg" title="Terrific Turkey Chili" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/1.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Terrific Turkey Chili</h3><em>$18</em>
                                                </div>
                                                <p>Turkey, Oregano, Tomato paste</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                            <div className="card-header" role="tab" id="heading-C">
                                <h5>
                                    <a className="collapsed" data-toggle="collapse" href="#collapse-C" aria-expanded="false" aria-controls="collapse-C">
                                        Desserts and Drinks
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-C" className="collapse" role="tabpanel" aria-labelledby="heading-C">
                                <div className="card-body">
                                    <div className="banner lazy" data-bg="url(img/banner_bg_3.jpg)">
                                        <div className="wrapper d-flex align-items-center justify-content-between opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                                            <div>
                                                <small>Desserts Special Offer</small>
                                                <h3>Mix Cakes $12 only</h3>
                                                <p>Cheese cake, Muffin, Sweet bred</p>
                                                <a href="reservations.html" className="btn_1">Reserve now</a>
                                            </div>
                                            <figure className="d-none d-lg-block"><img src="/img/banner.svg" alt="" width="200" height="200" className="img-fluid" /></figure>
                                        </div>

                                    </div>

                                    <div className="row magnific-gallery add_top_30">
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/3.jpg" title="Summer Berry" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/3.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Summer Berry</h3><em>$8</em>
                                                </div>
                                                <p>Raspberries, Blackberries</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/4.jpg" title="Coconut Tart" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/4.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Coconut Tart</h3><em>$10</em>
                                                </div>
                                                <p>Blueberries, Graham cracker crumbs</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/5.jpg" title="Pumpkin Cookies" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/5.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Pumpkin Cookies</h3><em>$11</em>
                                                </div>
                                                <p>Pumpkin, Sugar, Butter</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/6.jpg" title="Cookies Cream Cheese" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/6.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Cookies Cream Cheese</h3><em>$14</em>
                                                </div>
                                                <p>Sugar, Butter, Eggs</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/8.jpg" title="Chocolate Cupcakes" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/8.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Chocolate Cupcakes</h3><em>$14</em>
                                                </div>
                                                <p>Chocolate, Eggs, Vanilla</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="menu_item">
                                                <figure>
                                                    <a href="img/menu_items/large/9.jpg" title="Chocolate Cupcakes" data-effect="mfp-zoom-in">
                                                        <img src="/img/menu_items/menu_items_placeholder.png" data-src="/img/menu_items/9.jpg" className="lazy" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="menu_title">
                                                    <h3>Chocolate Cupcakes</h3><em>$14</em>
                                                </div>
                                                <p>Chocolate, Eggs, Vanilla</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <p className="text-center"><a href="#0" className="btn_1 outline">Download Menu</a></p>
            </div>

        </div>
    );
};

export default Component;
