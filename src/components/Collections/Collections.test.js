import React from 'react';
import Collections from './index';

import { mount } from 'enzyme';
import { findByTestAttribute } from '../../shared/scripts/testUtils';

describe('Collections component', () => {
    
    let component;

    beforeAll(() => {

        const collections = [
            {
              "collection": {
                "collection_id": 1,
                "res_count": 30,
                "image_url": "https://b.zmtcdn.com/data/collections/e1d5e8f900dbca01d11f353ef4b6a97c_1581661395.jpg",
                "title": "Trending This Week",
                "description": "Most popular restaurants in town this week",
              }
            },
            {
              "collection": {
                "collection_id": 68,
                "res_count": 27,
                "image_url": "https://b.zmtcdn.com/data/collections/7183c11319d00056c26c32c3b115f7b0_1427364741_l.jpg",
                "title": "Group meals",
                "description": "It's funner with friends.",
              }
            },
            {
              "collection": {
                "collection_id": 12,
                "res_count": 27,
                "image_url": "https://b.zmtcdn.com/data/collections/b881f496afbf6a3baeb1165ec3dd7ec1_1463135565.jpg",
                "title": "Pocket Friendly Options For You",
                "description": "Your top options when dining on a budget",
              }
            }
        ];
    
        component = mount(<Collections city='Warsaw' collections={collections} />);
    })

    it('Should render with correct number of collection items before expanding', () => {
        const collectionItem = findByTestAttribute(component, 'CollectionItem');
        expect(collectionItem.length).toBe(2);
    });

    it('Should render with correct number of collection items after expanding', () => {
        const button = component.find('.show-more-button');
        button.simulate('click');
        
        const collectionItem = findByTestAttribute(component, 'CollectionItem');
        expect(collectionItem.length).toBe(3);
    });

});
