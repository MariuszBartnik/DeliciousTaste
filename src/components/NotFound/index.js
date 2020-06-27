import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundIcon from '../../assets/not-found.svg';

import './styles.scss';

const NotFound = () => {
    return (
        <div className="not-found-wrapper">
            <img className="not-found-icon" src={NotFoundIcon} alt='Fork and spoon' />
            <div className="not-found-text">
                <h2>Restaurants not found</h2>
                <p>We cannot find any restaurant in this city</p>
                <Link to='/search'>Try again</Link>
            </div>
        </div>
    )
}

export default NotFound
