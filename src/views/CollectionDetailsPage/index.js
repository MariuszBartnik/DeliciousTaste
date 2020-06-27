import React from 'react';

import NameTopBar from '../../components/NameTopBar';
import ListWrapper from '../../components/ListWrapper';
import Footer from '../../components/Footer';

import * as collections from '../../shared/API mockups/collections.json';
import * as location from '../../shared/API mockups/loccation_details.json'

const CollectionDetailsPage = () => {
    const {title, image_url} = collections.default.collections[0].collection;
    const {best_rated_restaurant} = location.default;

    return (
        <main data-test="RestaurantDetailsPageWrapper">
            <NameTopBar 
                name={title}
                bg_img={image_url}
            />

            <div className="container">
                <ListWrapper 
                    title='Collection Restaurants'
                    subtitle={`Check restaurants included in this collection`}
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