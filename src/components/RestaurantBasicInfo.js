import React from 'react';
import propTypes from 'prop-types';

import SectionTitle from './SectionTitle';

import Checkbox from '../assets/checkbox.svg';

import styled from 'styled-components';
import { device } from '../shared/media';
import { Container } from '../shared/styles';

const InfoBox = styled.div`
    position: relative;
    padding: 3rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;    
    border: 1px solid #37ECCB;
    margin: 3rem 0;
`;

const InfoTitle = styled.span`
    position: absolute;
    font-size: 1.1rem;
    padding: 0 2rem;
    background: #fff;
    line-height: 1rem;
    top: -.5rem;
    left: 50%;
    transform: translateX(-50%);
`;

const InfoContent = styled.div`
    position: relative;
    flex-basis: 100%;
    margin: 1rem 0;
    border: 1px solid #37ECCB;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    border-radius: 1rem;

    @media ${device.tablet}{
        flex-basis: 48%;
        margin-right: 2%;
    }

    @media ${device.laptop}{
        flex-basis: 24%;
        margin-right: 1%;
    }
`;

const HighlightItem = styled.div`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    margin: 1rem 0;

    & img{
        width: 2rem;
        margin-right: .5rem;
    }

    @media ${device.tablet}{
        flex-basis: 48%;
        margin-right: 2%;
    }

    @media ${device.laptop}{
        flex-basis: 24%;
        margin-right: 1%;
    }
`; 

const RestaurantBasicInfo = ({ cuisines, highlights}) => {
    
    const convertStringToArray = (string) => {
        return string.split(",").map(item => item.trim());
    }
    const renderedCuisines = convertStringToArray(cuisines);

    return (
        <section>
            <SectionTitle>
                <h3>Restaurant Info</h3>
                <p>Learn more about this restaurant</p>
            </SectionTitle>
            <Container>
                <InfoBox>
                    <InfoTitle>Cuisines</InfoTitle>
                    { renderedCuisines.map(cuisine => (
                        <InfoContent key={cuisine}> 
                            <p>{cuisine}</p> 
                        </InfoContent>
                    )) }
                </InfoBox>

                <InfoBox>
                    <InfoTitle>More info</InfoTitle>
                    {highlights.map((info, index) => (
                        <HighlightItem key={info}>
                            <img src={Checkbox} alt={ index+1 } />
                            {info}
                        </HighlightItem>
                    ))}
                </InfoBox>
            </Container>
        </section>
    )
}

RestaurantBasicInfo.propTypes = {
    cuisines: propTypes.string,
    highlights: propTypes.arrayOf(propTypes.string)
}

export default RestaurantBasicInfo
