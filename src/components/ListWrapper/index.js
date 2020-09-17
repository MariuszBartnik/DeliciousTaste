import React, {useState} from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle';
import RestaurantItem from '../RestaurantItem';
import CollectionItem from '../CollectionItem';
import ShowMoreButton from '../ShowMoreButton';

import './styles.scss';

const ListWrapper = ({ title, subtitle, component, list, expandable }) => {

    const [showMore, setShowMore] = useState(false);
    
    const toggleShowMore = () => {
        setShowMore(!showMore);
    }
    
    const getRenderedItems = (data) => {
        return (showMore) ? data : data.slice(0, 2)
    }

    const renderedList = (expandable) ? getRenderedItems(list) : list;

    const components = {
        restaurant: RestaurantItem,
        collection: CollectionItem
    }
    
    const Component = components[component];

    return (
        <section data-test="ListWrapper">
            <SectionTitle>
                <h3>{ title }</h3>
                <p> { subtitle } </p>
            </SectionTitle>

            <div className="list-wrapper">
                {renderedList.map(item => (
                        <Component 
                            key={(component === 'restaurant') ? item.restaurant.id : item.collection.collection_id} 
                            item={item[component]} 
                            data-test="ListItem"
                        />
                    )
                )}  
            </div>

            {expandable && list.length > 2 && (
                <ShowMoreButton 
                    showMore={showMore} 
                    toggleShowMore={toggleShowMore} 
                    data-test="ShowMoreButton"
                />
            )}            

        </section>
    )
}

ListWrapper.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    component: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object),
    expandable: PropTypes.bool
}

export default ListWrapper
