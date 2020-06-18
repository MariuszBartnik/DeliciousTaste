import React from 'react'
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle/';

import './styles.scss';

const TopCuisines = ({ city, cuisines }) => {
    return (
        <section>
            <SectionTitle>
                <h3>Top cuisines</h3>
                <p>Try most popular cuisines in {city} </p>
            </SectionTitle>

            <div className="cuisines-list">
                {
                    cuisines.map(cuisine => (
                        <div className="cuisine" key={cuisine} data-test="CuisineItem">
                            {cuisine}
                        </div>
                    ))    
                }
            </div>
        </section>
    )
}

TopCuisines.propTypes = {
    city: PropTypes.string,
    cuisines: PropTypes.arrayOf(PropTypes.string)
}

export default TopCuisines
