import React from 'react';
import propTypes from 'prop-types';

import SectionTitle from './SectionTitle';
import GoogleMap from './GoogleMap';

const RestaurantLocation = ({ coordinates }) => {
    return (
        <section>
            <SectionTitle>
                <h3>Location</h3>
                <p>Find this place easily with our website</p>
            </SectionTitle>
            <GoogleMap 
                coordinates={coordinates}
            />
        </section>
    )
}

RestaurantLocation.propTypes = {
    coordinates: propTypes.objectOf(propTypes.string)
}

export default RestaurantLocation
