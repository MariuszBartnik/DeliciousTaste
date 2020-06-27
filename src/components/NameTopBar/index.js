import React from 'react'
import PropTypes from 'prop-types';

import Navbar from '../Navbar';

import './styles.scss';

const NameTopBar = ({ name, bg_img }) => {
    return (
        <div 
            className="restaurant-top-bar" 
            style={{background: `url(${bg_img})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'}}
            data-test="NameTopBar"
        >
            <div className="top-bar-wrapper">
                <Navbar />
                <h2>
                    { name }
                </h2>                
            </div>
        </div>
    )
}

NameTopBar.propTypes = {
    name: PropTypes.string,
    bg_img: PropTypes.string,
}

export default NameTopBar
