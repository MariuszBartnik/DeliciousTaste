import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './styles.scss';

const CollectionItem = ({ item }) => {

    return (
        <div 
            className="collection" 
            style={{background: `url(${item.image_url})`}} 
            key={item.collection_id}
        >
            <div className="text-wrapper">
                <h4 className="collection-title">
                    {item.title}
                </h4>
                <p className="collection-desc" data-test="CollectionDesc">
                    {item.description}
                </p>
                <Link to={`/collection-details/${item.collection_id}`} className="action-link">
                    {`${item.res_count} restaurants >>`}
                </Link>
            </div>
        </div>
    )
}

CollectionItem.propTypes = {
    item: PropTypes.shape({
        collection_id: PropTypes.number,
        res_count: PropTypes.number,
        image_url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    })
}

export default CollectionItem;
