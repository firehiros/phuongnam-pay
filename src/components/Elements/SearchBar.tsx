import React from 'react';

const Component = ({ ...props }) => {
    return (
        <div className="search-overlay-menu">
            <span className="search-overlay-close"><span className="closebt"><i className="icon_close"></i></span></span>
            <form role="search" id="searchform" method="get">
                <input name="q" type="search" placeholder="Search..." />
                <button type="submit"><i className="icon_search"></i></button>
            </form>
        </div>
    );
};

export default Component;
