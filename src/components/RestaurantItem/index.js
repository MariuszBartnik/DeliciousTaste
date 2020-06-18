import React from 'react'
import propTypes from 'prop-types';

import './styles.scss';

const RestaurantItem = ({ restaurant }) => {
    return (
        <div className="restaurant" data-test="RestaurantItem">
            <div className="col">
                <img className="thumbnail" src={restaurant.thumb} alt={`Thumbnail of ${restaurant.name}`} />
            </div>
            <div className="col">
                <h4 className="restaurant-name" data-test="RestaurantName">
                    {restaurant.name}
                </h4>
                <p className="restaurant-address">
                    {restaurant.location.address}
                </p>

                <span 
                    className="restaurant-rating" 
                    style={{background: `#${restaurant.user_rating.rating_color}`}} 
                >
                    {restaurant.user_rating.aggregate_rating}
                </span>
            </div>
        </div>
    )
}

RestaurantItem.propTypes = {
    restaurant: propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        location: propTypes.object,
        thumb: propTypes.string,
        user_rating: propTypes.object
    })
}

export default RestaurantItem
