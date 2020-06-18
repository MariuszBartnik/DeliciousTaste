import React from 'react'

import './styles.scss';

const SearchForm = () => {
    return (
        <form className="form">
            <input className="input" placeholder="Enter city name..."/>
            <button className="submit-button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;
