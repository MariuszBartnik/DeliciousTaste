import React from 'react';

import './styles.scss';

const ShowMoreButton = ({ showMore, toggleShowMore }) => {
    return (
        <button className="show-more-button" onClick={() => toggleShowMore()}>
            {(showMore) ? 'Show less' : 'Show more'} 
        </button>
    )
}

export default ShowMoreButton
