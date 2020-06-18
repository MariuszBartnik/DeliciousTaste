import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle/';

import { convertStringToArray } from '../../shared/scripts/utils';
import Checkbox from '../../assets/checkbox.svg';

import './styles.scss';

const RestaurantBasicInfo = ({cuisines, highlights}) => {

    const renderedCuisines = convertStringToArray(cuisines);

    return (
        <section data-test="RestaurantBasicInfo">
            <SectionTitle>
                <h3>Restaurant Info</h3>
                <p>Learn more about this restaurant</p>
            </SectionTitle>
            <div className="container">
                <div className="info-box">
                    <span className="info-title">Cuisines</span>
                    { renderedCuisines.map(cuisine => (
                        <div className="info-content" key={cuisine} data-test="Cuisine"> 
                            {cuisine}
                        </div>
                    )) }
                </div>

                <div className="info-box">
                    <span className="info-title">More info</span>
                    {highlights.map((info, index) => (
                        <div className="highlight-item" key={info} data-test="Highlight">
                            <img src={Checkbox} alt={ index+1 } />
                            {info}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

RestaurantBasicInfo.propTypes = {
    cuisines: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string)
}

export default RestaurantBasicInfo
