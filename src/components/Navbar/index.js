import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                Delicious Taste
            </Link>
        </nav>
    )
};

export default Navbar;