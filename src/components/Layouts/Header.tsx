// React Import
import React from 'react';
import Image from 'next/image'

// 3rd Import

// App Import
import TopMenu from '../Elements/TopMenu'
import Searchbar from '../Elements/SearchBar'
import CartDropdown from '../Elements/CartDropdown'

const Component = ({ ...props }) => {
    return (
        <header className="header clearfix element_to_stick">
            <div className="layer"></div>
            <div className="container-fluid">
                {/* Logo */}
                <div id="logo">
                    <a href="/">
                        <img src="/img/logo.svg" width="140" height="35" alt="" className="logo_normal" />
                        <img src="/img/logo_sticky.svg" width="140" height="35" alt="" className="logo_sticky" />
                    </a>
                </div>
                
                <CartDropdown />

                <a href="#0" className="open_close">
                    <i className="icon_menu"></i><span>Menu</span>
                </a>
                {/* Sidebar */}
                <TopMenu />
            </div>
            {/* Search */}
            <Searchbar />
        </header>
    );
};

export default Component;
