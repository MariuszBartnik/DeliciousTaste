import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import MarkerIcon from '../assets/marker.png' 

import styled from 'styled-components';

const MapCanvas = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    margin: 1rem auto 0;
`;

const GoogleMap = ({ coordinates }) => {

    useEffect(() => {
        if(!window.google){
            const script = document.createElement('script');
            script.type='text/javascript';
            script.src='https://maps.google.com/maps/api/js?key=AIzaSyDmuqYu3m5xiX4-3yCzxDqa7lTS9glZdWQ&v=3'
        
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(script, x);

            script.addEventListener('load', () => {
                onScriptLoad();
            })
        }else{
            onScriptLoad();
        }
    })

    const onScriptLoad = () => {

        const mapCanvas = document.getElementById('myMap');
        const position = {
            lat: +coordinates.lat,
            lng: +coordinates.lng
        }

        const map = new window.google.maps.Map(mapCanvas, {
            center: position,
            zoom: 12,
            disableDefaultUI: true
        });
        const marker = new window.google.maps.Marker({
            map,
            position,
            icon: MarkerIcon
        })
    }

    return (
        <MapCanvas id="myMap" />
    )
}

GoogleMap.propTypes = {
    coordinates: propTypes.objectOf(propTypes.string)
}

export default GoogleMap;
