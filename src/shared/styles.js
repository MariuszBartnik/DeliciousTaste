import styled from 'styled-components';
import { device } from '../shared/media';

export const Wrapper = styled.div`
    font-family: 'Playfair Display', serif;
    width: 100vw;
    height: 100vh;
    background: #1a1a1a;
    color: #fff;
    padding: 2rem 1rem;
    overflow: hidden;
`;

export const FlexBox = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    overflow: hidden;

    @media ${device.tablet}{
        flex-direction: row;
        align-items: center;
    }
`;


export const Container = styled.div`
    width: 90%;
    margin: 0 auto;

      @media ${device.tablet}{
        width: 80%;
    }
`;