import React from 'react'
import propTypes from 'prop-types';

import CityItem from './CityItem';

import styled from 'styled-components';

const CityList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    

`;


const Cities = ({ cities }) => {
    return (
        <CityList data-test="CityListWrapper">
            {cities.map(city => (
                <CityItem key={city.id} city={city} data-test="CityListItem"/>
            ))}
        </CityList>
    )
}

Cities.propTypes = {
    cities: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            name: propTypes.string,
            country_name: propTypes.string,
            country_flag_url: propTypes.string
        })
    )
};

export default Cities
