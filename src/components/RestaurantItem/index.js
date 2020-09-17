import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import restaurantIcon from '../../assets/restaurant-icon.svg';

import './styles.scss';

const RestaurantItem = ({ item }) => {
    const history = useHistory();

    const navigate = (restaurant_id) => {
        history.push(`/restaurant-details/${restaurant_id}`);
    }

    return (
        <div className="restaurant" data-test="RestaurantItem" onClick={() => {navigate(item.id)}}>
            <div className="restaurant-item-column">
                <img className="thumbnail" src={item.thumb || restaurantIcon} alt={`Thumbnail of ${item.name}`} />
            </div>
            <div className="restaurant-item-column">
                <h4 className="restaurant-name" data-test="RestaurantName">
                    {item.name}
                </h4>
                <p className="restaurant-address">
                    {item.location.address}
                </p>

                <span 
                    className="restaurant-rating" 
                    style={{background: `#${item.user_rating.rating_color}`}} 
                >
                    {item.user_rating.aggregate_rating}
                </span>
            </div>
        </div>
    )
}

RestaurantItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        location: PropTypes.object,
        thumb: PropTypes.string,
        user_rating: PropTypes.object
    })
}

export default RestaurantItem
