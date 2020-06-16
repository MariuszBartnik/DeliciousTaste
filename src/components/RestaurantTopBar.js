import React from 'react'
import propTypes from 'prop-types';

import Navbar from './Navbar';

import OpenClosedIcon from '../assets/open-close.svg';
import PhoneIcon from '../assets/phone.svg';
import AddressIcon from '../assets/location.svg';

import styled from 'styled-components';
import { device } from '../shared/media';

const TopBar = styled.div`
    position: relative;
    background: url(${props => props.bg_img});
    background-size: cover;
    background-position: center center;
    color: #fff;
    padding: .5rem 0 0;
    
    & h2{
        position: relative;
        font-family: 'Playfair Display', serif;
        font-size: 3rem;
        font-weight: 400;
        text-align:center;
        margin: 0 0 2rem;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
    }
`;

const ContactInfoBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    padding: 1rem 3rem;
    background: rgba(0,0,0,.5);

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

const ContactDetail = styled.div`
    flex: 1 0 33%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
    align-items: center;

    &:last-of-type{
        margin-bottom: 0;
    }

    @media ${device.tablet}{
        margin-bottom: 0;
    }

    & img{
        height: 2rem;
        margin-right: 1rem;
    }
`;

const RestaurantTopBar = ({ name, phone, address, bg_img }) => {
    return (
        <TopBar bg_img={bg_img}>
            <Navbar />
                <h2>
                    { name }
                </h2>

                <ContactInfoBar>
                    <ContactDetail> 
                        <img src={OpenClosedIcon} alt='Open/Closed' />
                        <p>
                            Now open<br />
                            Close at 11PM
                        </p>
                    </ContactDetail>
                    <ContactDetail>
                        <img src={PhoneIcon} alt='Phone' />
                        <p>{phone}</p>
                    </ContactDetail>
                    <ContactDetail>
                        <img src={AddressIcon} alt='Address' />
                        <p>{address}</p>
                    </ContactDetail>
                </ContactInfoBar>
        </TopBar>
    )
}

RestaurantTopBar.propTypes = {
    name: propTypes.string,
    phone: propTypes.string,
    address: propTypes.string,
    bg_img: propTypes.string
};

export default RestaurantTopBar;
