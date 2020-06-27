import React from 'react';
import './styles.scss';

import MainTitle from '../../components/MainTitle';
import SearchForm from '../../components/SearchForm';

const SearchPage = () => {
    return (
        <main className="wrapper" data-test="SearchPageWrapper">
            <div className="flexbox-column">
                <MainTitle />
                <SearchForm />
            </div>
        </main>
    )
}

export default SearchPage
