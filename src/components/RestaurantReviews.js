import React from 'react';
import propTypes from 'prop-types';

import StarRatings from 'react-star-ratings';
import SectionTitle from './SectionTitle';

import styled from 'styled-components';
import { device } from '../shared/media';
import { Container } from '../shared/styles';

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #37ECCB;
    padding: 1rem;
    margin 1rem 0;

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

const UserBox = styled.div`
    text-align: center;
    position: relative;
    margin-bottom: 2rem;
    &::after{
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 0; right: 0; top: 0;
        border-bottom: 1px solid #37ECCB;
    }

    @media ${device.tablet}{
        margin-bottom: 0;
        margin-right: 2rem;
        height: 100%;
        flex-basis: 30%;

        &::after{
            bottom: 0rem;
            right: -1rem;
            border-bottom: none;
            border-right: 1px solid #37ECCB;
        }
    }

    @media ${device.tablet}{
        flex-basis: 20%;
    }

`;
    
const UserImg = styled.img`
    width: 100px;
    border-radius: 50%;

    @media ${device.tablet}{
        width: 60px;
    }

`;

const UserName = styled.p`
    color: #1a1a1a;
    font-size: 1.1rem;
    margin: .7rem 0;
`;

const UserLevel = styled.span`
    display: block;
    width: 50%;
    margin: 0 auto;
    font-size: .9rem;
    color: #fff;
    background: #${props => props.bgColor};
    padding: .5rem;
    border-radius: 1.5rem;

    @media ${device.tablet}{
        width: 90%;
    }
`;

const RatingBox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tablet}{
        flex-basis: 70%;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: left;
    }

    @media ${device.tablet}{
        flex-basis: 80%;
    }
`;

const StyledStarRatings = styled(StarRatings)`
    @media ${device.tablet}{
        flex: 1 0 45%;
        order: 1;
    }
`;

const ReviewText = styled.p`
    text-align: left;
    color: #1a1a1a;
    margin .5rem 0;

    @media ${device.tablet}{
        flex: 1 0 100%;
        order: 3;
    }
`;

const ReviewDate = styled.p`
    font-size: .9rem;
    text-align: right;
    color: #a1a1a1;

    @media ${device.tablet}{
        flex: 1 0 45%;
        order: 2;
    }
`;

const RestaurantReviews = ({ reviews }) => {
    return (
        <section>
            <SectionTitle>
                <h3>Guest reviews</h3>
                <p>Check what other people think about this place</p>
            </SectionTitle>
            <Container>
                {reviews.map(review => (
                    <ReviewBox key={review.review.id}>
                        <UserBox>
                            <UserImg src={review.review.user.profile_image} alt={review.review.user.name} />
                            <UserName>
                                {review.review.user.name}
                            </UserName>
                            <UserLevel bgColor={review.review.user.foodie_color} >
                                {review.review.user.foodie_level || 'Guest'}
                            </UserLevel>
                        </UserBox>
                        <RatingBox>
                            <StyledStarRatings 
                                rating={review.review.rating}
                                starRatedColor="#37ECCB"
                                starEmptyColor="#A1A1A1"
                                starDimension="35px"
                                starSpacing="3px"
                            />

                            <ReviewText>
                                {review.review.review_text}
                            </ReviewText>

                            <ReviewDate>
                                {review.review.review_time_friendly}
                            </ReviewDate>
                        </RatingBox>
                    </ReviewBox>
                ))}
            </Container>
        </section>
    )
}

RestaurantReviews.propTypes = {
    reviews: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        rating: propTypes.number,
        review_text: propTypes.string,
        review_time_friendly: propTypes.string,
        user: propTypes.shape({
            name: propTypes.string,
            foodie_level: propTypes.string,
            foodie_color: propTypes.string,
            profile_image: propTypes.string
        })
    }))
}

export default RestaurantReviews
