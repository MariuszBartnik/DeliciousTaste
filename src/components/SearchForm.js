import React from 'react'

import styled from 'styled-components';
import { device } from '../shared/media';

const Form = styled.form`
    width: 90%;

    @media ${device.tablet}{
        width: 70%;
    }

    @media ${device.laptop}{
        width: 60%;
    }
`;

const Input = styled.input`
    display: block;
    text-align: center;
    width: 100%;
    margin: 1rem auto;
    padding: .5rem;
    font-size: 1rem;
    background: transparent;
    color: #fff;
    border: 2px solid #3FECCB;
    outline: none;


    &::placeholder{
        color: #a1a1a1;
    }
`;

const SubmitButton = styled.button`
    display: block;
    width: 100%;
    margin: 1rem auto;
    padding: .5rem;
    font-size: 1rem;
    background: #37ECCB;
    color: #1a1a1a;
    border: none;
    outline: none;
    cursor: pointer;

    @media ${device.laptop}{
        width: 30%;
        margin: 1rem 0; 
        margin-left: auto;
    }
`;

const SearchForm = () => {
    return (
        <Form>
            <Input placeholder="Enter city name..."/>
            <SubmitButton type="submit">Search</SubmitButton>
        </Form>
    )
}

export default SearchForm
