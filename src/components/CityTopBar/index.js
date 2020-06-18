import React from 'react'
import PropTypes from 'prop-types';

import Navbar from '../Navbar/';

import './styles.scss';

const CityTopBar = ({ city, nightlife_index, popularity }) => {
    return (
        <div className="top-bar">
            <Navbar />
            <div className="container">
                <h2 data-test="CityName">
                    { city }
                </h2>
                <div className="stat-boxes">
                    <div className="statistics">
                        <p>Nightlife index</p>
                        <p>{ nightlife_index }</p>
                    </div>
                    <div className="statistics">
                        <p>Popularity</p>
                        <p>{ popularity }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

CityTopBar.propTypes = {
    city: PropTypes.string,
    nightlife_index: PropTypes.string,
    popularity: PropTypes.string
}

export default CityTopBar
