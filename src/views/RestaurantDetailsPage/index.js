import React from 'react';
import { useParams } from 'react-router-dom';

import NameTopBar from '../../components/NameTopBar';
import ContactDetailsBar from '../../components/ContactDetailsBar';
import RestaurantBasicInfo from '../../components/RestaurantBasicInfo';
import RestaurantReviews from '../../components/RestaurantReviews';
import RestaurantLocation from '../../components/RestaurantLocation';
import Footer from '../../components/Footer';

import * as restaurant from '../../shared/API mockups/restaurant.json';
import * as reviews from '../../shared/API mockups/reviews.json';

const RestaurantDetailsPage = () => {
    const {name, phone_numbers, location, featured_image, cuisines, highlights, menu_url} = restaurant.default;
    const coordinates = {
        lat: location.latitude,
        lng: location.longitude
    }
    let { id } = useParams();

    return (
        <main data-test="RestaurantDetailsPageWrapper">
            <NameTopBar 
                name={name}
                bg_img={featured_image}
            />
            <ContactDetailsBar 
                phone={phone_numbers}
                address={location.address}
                menu_url={menu_url}
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
        </main>
    )
}

export default RestaurantDetailsPage;