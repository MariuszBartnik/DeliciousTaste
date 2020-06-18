import React from 'react';

import MainTitle from '../../components/MainTitle/';
import PhotosGrid from '../../components/PhotosGrid/';

import './styles.scss';

const MainPage = () => {
    
    return (
        <main className="wrapper" data-test="MainPageWrapper">
            <div className="flexbox">
                <div className="column">
                        <MainTitle />
                        <div>
                            <button className="filled-button">Search for city</button>
                            <button className="outline-button">Use current location</button>
                        </div>
                </div>
                <div className="column">
                    <PhotosGrid />
                </div>
            </div>
        </main>
    )
}

export default MainPage
