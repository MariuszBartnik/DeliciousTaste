import React from 'react'
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle';
import CollectionItem from '../CollectionItem';
import withShowMoreLess from '../../hoc/withShowMoreLess/'

import './styles.scss';

const Collections = ({ getRenderedItems, city, collections }) => {

    return (
        <section>
            <SectionTitle>
                <h3>Collections</h3>
                <p>Look for some fun events in {city} </p>
            </SectionTitle>

            <div className="collection-list">
                {getRenderedItems(collections).map(({ collection }) => (
                    <CollectionItem 
                        key={collection.collection_id} 
                        collection={collection}
                        data-test="CollectionItem"                        
                    />
                ))}
            </div>

        </section>
    )
}

Collections.propTypes = {
    getRenderedItems: PropTypes.func,
    city: PropTypes.string,
    collections: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default withShowMoreLess(Collections);
