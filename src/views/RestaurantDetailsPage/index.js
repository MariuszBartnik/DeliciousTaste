import React from 'react';

import RestaurantTopBar from '../../components/RestaurantTopBar';
import RestaurantBasicInfo from '../../components/RestaurantBasicInfo';
import RestaurantReviews from '../../components/RestaurantReviews';
import RestaurantLocation from '../../components/RestaurantLocation';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

import * as restaurant from '../../shared/API mockups/restaurant.json';
import * as reviews from '../../shared/API mockups/reviews.json';

const RestaurantDetailsPage = () => {

    const {name, phone_numbers, location, featured_image, cuisines, highlights} = restaurant.default;
    const coordinates = {
        lat: location.latitude,
        lng: location.longitude
    }
    return (
        <main data-test="RestaurantDetailsPageWrapper">
            <RestaurantTopBar 
                name={name}
                phone={phone_numbers}
                address={location.address}
                bg_img={featured_image}
            />
            <RestaurantBasicInfo 
                cuisines={cuisines}
                highlights={highlights}
            />
            <RestaurantReviews 
                reviews={reviews.user_reviews}
            />
            <RestaurantLocation 
                coordinates={coordinates}
            />
            <Footer />
            {/* <Loader /> */}
        </main>
    )
}

export default RestaurantDetailsPage;