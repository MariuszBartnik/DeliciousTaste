import React from 'react'

import styled from 'styled-components';

const Nav = styled.nav`
    position: relative;
    font-family: 'Playfair Display', serif;
    background: transparent;
    color: #fff;
    padding: 1rem;
    text-align: center;
`;

const Navbar = () => {
    return (
        <Nav>
            Delicious Taste
        </Nav>
    )
}

export default Navbar
