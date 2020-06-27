import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle';
import GoogleMap from '../GoogleMap';

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
    coordinates: PropTypes.objectOf(PropTypes.string)
}

export default RestaurantLocation
