import React from 'react'

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const LoadingWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const Loading = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 10px solid #1a1a1a;
    border-top: 10px solid #37ECCB;
    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`;


const Loader = () => {
    return (
        <LoadingWrapper>
            <Loading />
        </LoadingWrapper>
    )
}

export default Loader
