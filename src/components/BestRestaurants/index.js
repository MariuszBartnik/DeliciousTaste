import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle/';
import RestaurantItem from '../RestaurantItem/';
import withShowMoreLess from '../../hoc/withShowMoreLess/';

import './styles.scss';

const BestRestaurants = ({ getRenderedItems, city, restaurants }) => {
    return (
        <section>
            <SectionTitle>
                <h3>Best Restaurants</h3>
                <p>Check the best restaurants in {city} </p>
            </SectionTitle>

            <div className="best-restaurants-list" data-test="BestRestaurantsWrapper">                
                { getRenderedItems(restaurants).map(({ restaurant }) => (
                        <RestaurantItem 
                            key={restaurant.id} 
                            restaurant={restaurant} 
                            data-test="BestRestaurantsItem"
                        />
                    ))
                }
            </div>
        </section>
    )
}

BestRestaurants.propTypes = {
    getRenderedItems: PropTypes.func,
    city: PropTypes.string,
    restaurants: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default withShowMoreLess(BestRestaurants);
