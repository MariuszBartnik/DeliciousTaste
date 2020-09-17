import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NameTopBar from '../../components/NameTopBar';
import ContactDetailsBar from '../../components/ContactDetailsBar';
import RestaurantBasicInfo from '../../components/RestaurantBasicInfo';
import RestaurantReviews from '../../components/RestaurantReviews';
import RestaurantLocation from '../../components/RestaurantLocation';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

const RestaurantDetailsPage = () => {
    const [restaurant, setRestaurant] = useState();
    const [reviews, setReviews] = useState();
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseRestaurant = await axios
                .post('http://localhost:5000/api/restaurant-details', { id });
            const responseReviews = await axios
                .post('http://localhost:5000/api/customers-reviews', { id });

            setRestaurant(responseRestaurant.data);
            setReviews(responseReviews.data.user_reviews);
        };

        fetchData();
    }, [id]);

    return (
        <main data-test="RestaurantDetailsPageWrapper">
            {(restaurant) ? (
                <>
                    <NameTopBar 
                        name={restaurant.name}
                        bg_img={restaurant.featured_image}
                    />
                    <ContactDetailsBar 
                        phone={restaurant.phone_numbers}
                        address={restaurant.location.address}
                        menu_url={restaurant.menu_url}
                    />
                    <RestaurantBasicInfo 
                        cuisines={restaurant.cuisines}
                        highlights={restaurant.highlights}
                    />
                    <RestaurantReviews 
                        reviews={reviews}
                    />
                    <RestaurantLocation 
                        coordinates={{
                            lat: restaurant.location.latitude,
                            lng: restaurant.location.longitude
                        }}
                    />
                    <Footer />
                </>
            ) : (
                <Loader theme={'light-theme'} />
            )}
        </main>
    )
}

export default RestaurantDetailsPage;