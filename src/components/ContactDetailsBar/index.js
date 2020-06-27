import React from 'react'
import PropTypes from 'prop-types';

import MenuIcon from '../../assets/menu.svg';
import PhoneIcon from '../../assets/phone.svg';
import AddressIcon from '../../assets/location.svg';

import './styles.scss';

const ContactDetailsBar = ({menu_url, phone, address}) => {
    return (
        <div className="contact-info-bar">
            
            <div className="contact-detail" data-test="ContactDetails"> 
                <img src={MenuIcon} alt='Menu' />
                <a href={menu_url}>Check menu</a>
            </div>

            <div className="contact-detail" data-test="ContactDetails">
                <img src={PhoneIcon} alt='Phone' />
                <p>{phone}</p>
            </div>
            
            <div className="contact-detail" data-test="ContactDetails">
                <img src={AddressIcon} alt='Address' />
                <p>{address}</p>
            </div>

        </div>
    )
}

ContactDetailsBar.propTypes = {
    phone: PropTypes.string,
    address: PropTypes.string,
    menu_url: PropTypes.string
}

export default ContactDetailsBar
