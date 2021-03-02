import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MainTitle from '../../components/MainTitle';
import Cities from '../../components/Cities';
import NotFound from '../../components/NotFound';
import Loader from '../../components/Loader';

import './styles.scss'

const CityListPage = () => {
    const [cities, setCities] = useState();
    const { query } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios
                .post('/api/cities/', { query });

                setCities(response.data);
        }

        fetchData();
    }, [query])

    return (
        <main className="scrollable-wrapper" data-test="CityListPageWrapper">
            {(cities) ? (
                <>
                    {(cities.location_suggestions.length  === 0) ? 
                        (
                            <NotFound />              
                        ) : (
                            <>
                                <MainTitle />
                                <div className="container">
                                    <Cities cities={cities.location_suggestions} />      
                                </div>
                            </>
                        )
                    }
                </>
            ) : (
                <Loader theme={'dark-theme'} />
            )}
        </main>
    )
}

export default CityListPage;
