import React from 'react'
import propTypes from 'prop-types';

import styled from 'styled-components';
import { device } from '../shared/media';

const Collection = styled.div`
    position: relative;
    background: url(${props => props.bg_img});
    flex-basis: 100%;
    margin-bottom: 1rem;
    height: 200px;

    &::before{
        content: '';
        position: absolute;
        top:0; left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
    }

    @media ${device.tablet}{
        flex-basis: 49%;
        flex-direction: row;
    }

    @media ${device.laptop}{
        flex-basis: 45%;
        flex-direction: row;
    }
`;

const TextWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3rem 1rem;

`;

const CollectionTitle = styled.h4`
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: .5rem;
`;

const CollectionDesc = styled.p`
    font-size: .9rem;
    color: #e5e5e5;
`;

const ActionLink = styled.a`
    position: absolute;
    color: #e5e5e5;
    bottom: 10px;
    right: 10px;
    display: inline-block;
    padding: .5rem 2rem;
    border: 1px solid #37ECCB;
    transition: all .3s ease;

    &:hover{
        background: #37ECCB;
        color: #1a1a1a;
        cursor: pointer;
    }
`;

const CollectionItem = ({ collection }) => {
    return (
        <Collection bg_img={collection.image_url} key={collection.collection_id}>
            <TextWrapper>
                <CollectionTitle>
                    {collection.title}
                </CollectionTitle>
                <CollectionDesc>
                    {collection.description}
                </CollectionDesc>
                <ActionLink>
                    {`${collection.res_count} restaurants >>`}
                </ActionLink>
            </TextWrapper>
        </Collection>
    )
}

CollectionItem.propTypes = {
    collection: propTypes.shape({
        collection_id: propTypes.number,
        res_count: propTypes.number,
        image_url: propTypes.string,
        title: propTypes.string,
        description: propTypes.string
    })
}

export default CollectionItem
