import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CityTopBar from '../../components/CityTopBar';
import ListWrapper from '../../components/ListWrapper'
import TopCuisines from '../../components/TopCuisines';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader'

const CityDetailsPage = () => {
    const [locationDetails, setLocationDetails] = useState();
    const [collections, setCollections] = useState();
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const locationResponse = await axios
                .post('/api/location-details/', { id });
            const collectionsResponse = await axios
                .post('/api/collections/', { id });

            setLocationDetails(locationResponse.data);
            setCollections(collectionsResponse.data);
        };

        fetchData();
    }, [id]);

    return (
        <main data-test="CityDetailsPageWrapper">
            {(locationDetails && collections) ? (
                <>
                    <CityTopBar 
                        city={locationDetails.city} 
                        nightlife_index={locationDetails.nightlife_index} 
                        popularity={locationDetails.popularity}
                    />
        
                    <div className="container">
                        <ListWrapper 
                            title='Best restaurants'
                            subtitle={`Check the best restaurants in ${locationDetails.city}`}
                            list={locationDetails.best_rated_restaurant}
                            component = 'restaurant'
                            expandable={true}
                        />
        
                        <TopCuisines
                            city={locationDetails.city}
                            cuisines={locationDetails.top_cuisines}
                        />
                                
                        {(collections.collections) ? (
                            <ListWrapper 
                                title='Collections'
                                subtitle={`Look for some fun events in ${locationDetails.city}`}
                                list={collections.collections}
                                component = 'collection'
                                expandable={true}
                            />
                        ) : (
                            null
                        )}
                    </div>
        
                    <Footer />
                </>
            ) : (
                <Loader theme={'light-theme'} />
            )}
        </main>
    )
}

export default CityDetailsPage;
