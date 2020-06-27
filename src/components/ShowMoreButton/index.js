import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ShowMoreButton = ({ showMore, toggleShowMore }) => {
    return (
        <button className="show-more-button" data-test="ShowMoreButton" onClick={() => toggleShowMore()}>
            {(showMore) ? 'Show less' : 'Show more'} 
        </button>
    )
}

ShowMoreButton.propTypes = {
    showMore: PropTypes.bool,
    toggleShowMore: PropTypes.func
}

export default ShowMoreButton
