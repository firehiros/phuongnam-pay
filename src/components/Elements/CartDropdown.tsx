import React from 'react';

const Component = ({ ...props }) => {
    return (
        <ul id="top_menu">
            <li><a href="#0" className="search-overlay-menu-btn"></a></li>
            <li>
                <div className="dropdown dropdown-cart">
                    <a href="shop-cart.html" className="cart_bt"><strong>2</strong></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li>
                                <figure><img src="/img/item_placeholder_square_small.jpg" data-src="/img/item_square_small_1.jpg" alt="" width="50" height="50" className="lazy" /></figure>
                                <strong><span>1x Pizza Napoli</span>$12.00</strong>
                                <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                            </li>
                            <li>
                                <figure><img src="/img/item_placeholder_square_small.jpg" data-src="/img/item_square_small_2.jpg" alt="" width="50" height="50" className="lazy" /></figure>
                                <strong><span>1x Hamburgher Maxi</span>$10.00</strong>
                                <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                            </li>
                            <li>
                                <figure><img src="/img/item_placeholder_square_small.jpg" data-src="/img/item_square_small_3.jpg" alt="" width="50" height="50" className="lazy" /></figure>
                                <strong><span>1x Red Wine Bottle</span>$20.00</strong>
                                <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                            </li>
                        </ul>
                        <div className="total_drop">
                            <div className="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span></div>
                            <a href="shop-cart.html" className="btn_1 outline">View Cart</a><a href="shop-checkout.html" className="btn_1">Checkout</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default Component;
