import React from 'react';
import './styles.scss'

import CityTopBar from '../../components/CityTopBar/';
import BestRestaurants from '../../components/BestRestaurants/';
import TopCuisines from '../../components/TopCuisines/';
import Collections from '../../components/Collections/';
import Footer from '../../components/Footer/';

import * as location from '../../shared/API mockups/loccation_details.json';
import * as collections from '../../shared/API mockups/collections.json';

const CityDetailsPage = () => {
    return (
        <main data-test="CityDetailsPageWrapper">
            <CityTopBar 
                city={location.city} 
                nightlife_index={location.nightlife_index} 
                popularity={location.popularity}
            />

            <div className="container">
                <BestRestaurants 
                    city={location.city}
                    restaurants={location.best_rated_restaurant}
                    />

                <TopCuisines
                    city={location.city}
                    cuisines={location.top_cuisines}
                />

                <Collections 
                    city={location.city}
                    collections={collections.collections}                
                />
            </div>

            <Footer />
        </main>
    )
}

export default CityDetailsPage;
