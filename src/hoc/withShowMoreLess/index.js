import React, {useState} from 'react';
import './styles.scss';

const withShowMoreLess = (WrappedComponent) => {
    
    
    const HocComponent = (props) => {
        const [showMore, setShowMore] = useState(false);
    
        const getRenderedItems = (data) => {
            return (showMore) ? data : data.slice(0, 2)
        }
        
        
        return (
            <>
                <WrappedComponent getRenderedItems={getRenderedItems} {...props} />
                
                <button className="show-more-button" onClick={() => setShowMore(!showMore)}>
                    {(showMore) ? 'Show less' : 'Show more'} 
                </button>
            </>
        )
            

    }
    
    return HocComponent
}

export default withShowMoreLess
