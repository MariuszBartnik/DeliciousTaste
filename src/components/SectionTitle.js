import React from 'react'

import styled from 'styled-components';

const Header = styled.div`
    position: relative;
    margin: 1.5rem auto 1rem;
    text-align: center;
    padding-top: 2rem;
    max-width: 60%;

    & h3{
        display: inline-block;
        position: relative;
        font-family: 'Playfair Display', serif;
        color: #1a1a1a;
        margin-bottom: .5rem;


        &::before{
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            left: -100px;
            width: 80px;
            height: 4px;
            background: #37ECCB;
        }

        &::after{
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            right: -100px;
            width: 80px;
            height: 4px;
            background: #37ECCB;
        }

    }

    & p{
        font-family: 'Nunito', sans-serif;
        color: #a1a1a1;
    }

`;

const SectionTitle = (props) => {
    return (
        <Header>
            {props.children}
        </Header>
    )
}

export default SectionTitle
