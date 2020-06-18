import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CollectionItem = ({ collection }) => {
    return (
        <div 
            className="collection" 
            style={{background: `url(${collection.image_url})`}} 
            key={collection.collection_id}
        >
            <div className="text-wrapper">
                <h4 className="collection-title">
                    {collection.title}
                </h4>
                <p className="collection-desc" data-test="CollectionDesc">
                    {collection.description}
                </p>
                <a className="action-link">
                    {`${collection.res_count} restaurants >>`}
                </a>
            </div>
        </div>
    )
}

CollectionItem.propTypes = {
    collection: PropTypes.shape({
        collection_id: PropTypes.number,
        res_count: PropTypes.number,
        image_url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    })
}

export default CollectionItem;
