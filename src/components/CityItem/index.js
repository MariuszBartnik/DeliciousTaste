import React from 'react';
import PropTypes from 'prop-types';


import './styles.scss';

const CityItem = ({ city }) => {
    return (
        <div class="found-city">
            <img class="country-flag" src={city.country_flag_url} alt={'Flag of' + city.country_name}/>
            <p className="city-name" data-test="CityName" >{city.name}</p>
            <p className="country-name">{city.country_name}</p>
        </div>
    )
}

CityItem.propTypes = {
    city: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        country_name: PropTypes.string,
        country_flag_url: PropTypes.string
    })
}

export default CityItem
