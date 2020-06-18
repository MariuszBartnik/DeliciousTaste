import React from 'react';
import PropTypes from 'prop-types';

import StarRatings from 'react-star-ratings';
import SectionTitle from '../SectionTitle/';

import './styles.scss';

const RestaurantReviews = ({ reviews }) => {
    if (!reviews) return null;

    return (
        <section data-test="RestaurantReviews">
            <SectionTitle>
                <h3>Guest reviews</h3>
                <p>Check what other people think about this place</p>
            </SectionTitle>
            <div className="container">
                {reviews.map(review => (
                    <div className="review-box" key={review.review.id} data-test="ReviewItem">
                        <div className="user-box">
                            <img className="user-img" src={review.review.user.profile_image} alt={review.review.user.name} />
                            <p className="user-name">
                                {review.review.user.name}
                            </p>
                            <span className="user-level" style={{background: `#${review.review.user.foodie_color}`}} >
                                {review.review.user.foodie_level || 'Guest'}
                            </span>
                        </div>
                        <div className="rating-box">
                            <StarRatings 
                                className="star-ratings" 
                                rating={review.review.rating}
                                starRatedColor="#37ECCB"
                                starEmptyColor="#A1A1A1"
                                starDimension="35px"
                                starSpacing="3px"
                            />

                            <p className="review-text">
                                {review.review.review_text}
                            </p>

                            <p className="review-date">
                                {review.review.review_time_friendly}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

RestaurantReviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        rating: PropTypes.number,
        review_text: PropTypes.string,
        review_time_friendly: PropTypes.string,
        user: PropTypes.shape({
            name: PropTypes.string,
            foodie_level: PropTypes.string,
            foodie_color: PropTypes.string,
            profile_image: PropTypes.string
        })
    }))
}

export default RestaurantReviews
