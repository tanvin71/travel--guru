import React from 'react';
import Header from '../Header/Header';
import Places from '../Places/Places';
import'./Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <Header></Header>
            <Places></Places>
        </div>
    );
};

export default Banner;