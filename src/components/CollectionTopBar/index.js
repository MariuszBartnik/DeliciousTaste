import React from 'react'
import PropTypes from 'prop-types';

import Navbar from '../Navbar/';

import './styles.scss';

const CollectionTopBar = ({ title, bg_img }) => {
    return (
        <div 
            className="collection-top-bar" 
            style={{background: `url(${bg_img})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'}}
            data-test="CollectionTopBar"
        >
            <div className="top-bar-wrapper">
                <Navbar />

                <h2> { title } </h2>
            </div>
        </div>
    )
}

CollectionTopBar.propTypes = {
    title: PropTypes.string,
    bg_img: PropTypes.string
}

export default CollectionTopBar
