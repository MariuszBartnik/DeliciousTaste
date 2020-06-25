import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const CityItem = ({ city }) => {
    const history = useHistory();

    const navigate = (city_id) => {
        history.push(`/city-details/${city_id}`)
    }

    return (
        <div class="found-city" onClick = {() => {navigate(city.id)}}>
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
