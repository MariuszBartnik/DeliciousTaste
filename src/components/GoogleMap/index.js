import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MarkerIcon from '../../assets/marker.png' 

import './styles.scss';

const GoogleMap = ({ coordinates }) => {
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

    useEffect(() => {
        if(!window.google){
            const script = document.createElement('script');
            script.type='text/javascript';
            script.src='https://maps.google.com/maps/api/js?key=// GOOGLE API KEY HERE //'
        
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(script, x);

            script.addEventListener('load', () => {
                onScriptLoad();
            })
        }else{
            onScriptLoad();
        }
    }, []);


    return (
        <div className="map-canvas" id="myMap" />
    )
}

GoogleMap.propTypes = {
    coordinates: PropTypes.objectOf(PropTypes.string)
}

export default GoogleMap;
