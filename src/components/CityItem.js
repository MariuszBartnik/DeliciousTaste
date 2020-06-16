import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { device } from '../shared/media';

const City = styled.div`
    position: relative;
    border: 1px solid #3FECCB;
    padding: 50px 1rem;
    text-align: center;
    flex: 1 0 99%;
    margin: 1%;
    cursor: pointer;

   &:hover > p{
        transform: scale(1.1);
    }
    
    @media ${device.tablet}{
        flex: 1 0 48%;
        max-width: 48%;
        
        &:last-of-type{
            margin-right: auto;
        }
    }

    @media ${device.laptop}{
        flex: 1 0 31.3333%;
        max-width: 31.3333%;
    }
`

const CountryFlag = styled.img`
        position: absolute;
        top: 10px;
        right: 10px;
        height: 40px;
`;

const CityName = styled.p`
    font-size: 1.5rem;
    transition: transform .5s ease;
`;

const CountryName = styled.p`
    color: #a1a1a1;
    transition: transform .5s ease;
`;


const CityItem = ({ city }) => {
    return (
        <City data-test="CityItemWrapper">
            <CountryFlag src={city.country_flag_url} alt={'Flag of' + city.country_name}/>
            <CityName data-test="CityName" >{city.name}</CityName>
            <CountryName>{city.country_name}</CountryName>
        </City>
    )
}

CityItem.propTypes = {
    city: propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        country_name: propTypes.string,
        country_flag_url: propTypes.string
    })
};

export default CityItem
