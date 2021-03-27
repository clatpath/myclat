import React from 'react';
import { BsSearch } from 'react-icons/bs';
import "./Searchbar.css"

const Searchbar = () => {
    return (
        <div className="searchBar">
            <input type="text" />
            <button className="searchBtn"><BsSearch /></button>
        </div>
    );
};

export default Searchbar;