import React from 'react';
import Link from 'next/link'

const Component = ({ ...props }) => {
    return (
        <nav className="main-menu">
            <div id="header_menu">

                <a href="#0" className="open_close">
                    <i className="icon_close"></i><span>Menu</span>
                </a>
                <Link href="/">
                    <a><img src="/img/logo.svg" width="140" height="35" alt="" /></a>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/" prefetch={false}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu" prefetch={false}>
                        <a>Menu</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blogs">
                        <a>Blogs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li><a href="/reservation" className="btn_top">Reservations</a></li>
            </ul>
        </nav>
    );
};

export default Component;
