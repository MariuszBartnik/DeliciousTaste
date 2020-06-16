import React from 'react';

import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
`;

const Subtitle = styled.p`
    text-align: center;
    color: #a1a1a1;
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

const MainTitle = () => {
    return (
        <>
            <Title>
                Delicious Taste
            </Title>
            <Subtitle>
                Find best restaurant with us 
            </Subtitle>  
        </>
    )
}

export default MainTitle
