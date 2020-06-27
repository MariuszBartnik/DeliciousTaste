import CollectionItem from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Collection Item component', () => {
    
    describe('Checking props', () => {

        it('Should render without warning', () => {
            const collection = {
                collection_id: 12,
                res_count: 32,
                image_url: 'test url',
                title: 'collection title',
                description: 'test description'
            };

            const propsErrors = checkProps(CollectionItem, { collection });

            expect(propsErrors).toBeUndefined();
        })

    })
    
    describe('Checking rendering', () => {
        
        let component;
        beforeAll(() => {
            const item = {
                collection_id: 12,
                res_count: 32,
                image_url: 'test url',
                title: 'collection title',
                description: 'test description'
            };

            component = setUpTest(CollectionItem, { item });
        })

        it('Should render with correct description', () => {
            const collectionDesc = findByTestAttribute(component, 'CollectionDesc');
            expect(collectionDesc.text()).toEqual('test description');
        })
    })
    

})
