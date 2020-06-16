import React from 'react'
import propTypes from 'prop-types';

import styled from 'styled-components';
import { device } from '../shared/media';

const Restaurant = styled.div`
    flex-basis: 100%;
    border: 1px solid #37ECCB;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet}{
        flex-basis: 49%;
        flex-direction: row;
    }

    @media ${device.laptop}{
        flex-basis: 45%;
        flex-direction: row;
    }
`;

const Column = styled.div`
    &:last-of-type{
        text-align: center;
    
        @media ${device.tablet}{
            text-align: right;
        }
    }
`;

const Thumbnail = styled.img`
    width: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;

    @media ${device.tablet}{
        margin-bottom: 0;
        margin-right: 1rem;
    }
`;

const RestaurantName = styled.h4`
    font-size: 1.2rem;
    color: #1a1a1a; 
`;

const RestaurantAddress = styled.p`
    font-size: .9rem;
    color: #a1a1a1;
    margin-bottom: 1.5rem;
`;

const RestaurantRating = styled.span`
    background: ${(props) => `#${props.bg_color}`};
    color: #fff;
    padding: .5rem 2rem;
`;

const RestaurantItem = ({ restaurant }) => {
    return (
        <Restaurant>
            <Column>
                <Thumbnail src={restaurant.thumb} alt={`Thumbnail of ${restaurant.name}`} />
            </Column>
            <Column>
                <RestaurantName>
                    {restaurant.name}
                </RestaurantName>
                <RestaurantAddress>
                    {restaurant.location.address}
                </RestaurantAddress>

                <RestaurantRating bg_color={restaurant.user_rating.rating_color} >
                    {restaurant.user_rating.aggregate_rating}
                </RestaurantRating>
            </Column>
        </Restaurant>
    )
}

RestaurantItem.propTypes = {
    restaurant: propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        location: propTypes.object,
        thumb: propTypes.string,
        user_rating: propTypes.object
    })
}

export default RestaurantItem
