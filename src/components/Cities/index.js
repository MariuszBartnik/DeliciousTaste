import React from 'react'
import PropTypes from 'prop-types';

import CityItem from '../CityItem/';

import './styles.scss';

const Cities = ({ cities }) => {
    if(!cities) return null; // Create some backup site if town was not found

    return (
        <div className="city-list" data-test="CitiesList">
            { cities.map(city => (
                <CityItem key={city.id} city={city} data-test="CityListItem"/>
            ))}
        </div>
    )
}

Cities.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            country_name: PropTypes.string,
            country_flag_url: PropTypes.string
        })
    )
};

export default Cities
