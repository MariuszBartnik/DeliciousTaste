import React from 'react';

import CityTopBar from '../../components/CityTopBar';
import ListWrapper from '../../components/ListWrapper'
import TopCuisines from '../../components/TopCuisines';
import Footer from '../../components/Footer';

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
                <ListWrapper 
                    title='Best restaurants'
                    subtitle={`Check the best restaurants in ${location.city}`}
                    list={location.best_rated_restaurant}
                    component = 'restaurant'
                    expandable={true}
                />

                <TopCuisines
                    city={location.city}
                    cuisines={location.top_cuisines}
                />

                <ListWrapper 
                    title='Collections'
                    subtitle={`Look for some fun events in ${location.city}`}
                    list={collections.collections}
                    component = 'collection'
                    expandable={true}
                />
            </div>

            <Footer />
        </main>
    )
}

export default CityDetailsPage;
