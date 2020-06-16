import React from 'react'
import './styles.scss'

import MainTitle from '../../components/MainTitle';
import Cities from '../../components/Cities';

import * as cities from '../../shared/API mockups/cities.json';


const CityListPage = () => {
    return (
        <main className="scrollable-wrapper" data-test="CityListPageWrapper">
            <MainTitle />
            <div className="container">
                <Cities cities={cities.location_suggestions} />                    
            </div>
        </main>
    )
}

export default CityListPage
