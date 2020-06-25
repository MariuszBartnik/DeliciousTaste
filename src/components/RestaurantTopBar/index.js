import React from 'react'
import PropTypes from 'prop-types';

import Navbar from '../Navbar/';

import OpenClosedIcon from '../../assets/open-close.svg';
import PhoneIcon from '../../assets/phone.svg';
import AddressIcon from '../../assets/location.svg';

import './styles.scss';

const RestaurantTopBar = ({ name, phone, address, bg_img }) => {
    return (
        <div 
            className="restaurant-top-bar" 
            style={{background: `url(${bg_img})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'}}
            data-test="RestaurantTopBar"
        >
            <div className="top-bar-wrapper">
                <Navbar />
                <h2>
                    { name }
                </h2>

                <div className="contact-info-bar">
                    <div className="contact-detail"> 
                        <img src={OpenClosedIcon} alt='Open/Closed' />
                        <p>
                            Now open<br />
                            Close at 11PM
                        </p>
                    </div>
                    <div className="contact-detail">
                        <img src={PhoneIcon} alt='Phone' />
                        <p>{phone}</p>
                    </div>
                    <div className="contact-detail">
                        <img src={AddressIcon} alt='Address' />
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

RestaurantTopBar.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    bg_img: PropTypes.string
}

export default RestaurantTopBar
