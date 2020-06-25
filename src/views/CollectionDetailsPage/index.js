import React from 'react';

import CollectionTopBar from '../../components/CollectionTopBar';
import ListWrapper from '../../components/ListWrapper';
import Footer from '../../components/Footer';

import * as collections from '../../shared/API mockups/collections.json';
import * as location from '../../shared/API mockups/loccation_details.json'

const CollectionDetailsPage = () => {
    const {title, image_url} = collections.default.collections[0].collection;
    const {best_rated_restaurant, city} = location.default;
    console.log(best_rated_restaurant);
    return (
        <main data-test="RestaurantDetailsPageWrapper">
            <CollectionTopBar 
                title={title}
                bg_img={image_url}
            />

            <div className="container">
                <ListWrapper 
                    title='Best restaurants'
                    subtitle={`Check the best restaurants in ${city}`}
                    list={best_rated_restaurant}
                    component = 'restaurant'
                    expandable={false}
                />            
            </div>
            
            <Footer />
        </main>
    )
}

export default CollectionDetailsPage;