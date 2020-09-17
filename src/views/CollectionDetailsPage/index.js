import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NameTopBar from '../../components/NameTopBar';
import ListWrapper from '../../components/ListWrapper';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

const CollectionDetailsPage = () => {
    const [collection, setCollection] = useState();
    const [restaurants, setRestaurants] = useState();
    const { cityId, collectionId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios
                .post('http://localhost:5000/api/collection-restaurants/', {
                    cityId,
                    collectionId
                });
            
            setCollection(response.data.collection);
            setRestaurants(response.data.restaurants);
        };

        fetchData();
    }, [cityId, collectionId]);

    return (
        <main data-test="RestaurantDetailsPageWrapper">
            {(collection && restaurants) ? (
                <>
                    <NameTopBar 
                        name={collection.title}
                        bg_img={collection.image_url}
                    />
        
                    <div className="container">
                        <ListWrapper 
                            title='Collection Restaurants'
                            subtitle={`Check restaurants included in this collection`}
                            list={restaurants}
                            component = 'restaurant'
                            expandable={false}
                        />            
                    </div>
                    
                    <Footer />
                </>
            ) : (
                <Loader theme={'light-theme'} />
            )}
        </main>
    )
}

export default CollectionDetailsPage;