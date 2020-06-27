import ListWrapper from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('List Wrapper Component', () => {
    
    describe('Checking props', () => {
        it('Should render without warning', () => {
            const props = {
                title: 'Best restaurants',
                subtitle: 'Check the best restaurants in town',
                component: 'restaurant',
                list: [
                    {restaurant: {id: '1', name: 'Aioli'}},
                    {restaurant: {id: '2', name: 'Liosan' }},
                    {restaurant: {id: '3', name: 'Starvald'}},
                    {restaurant: {id: '4', name: 'Tiste' }},
                    {restaurant: {id: '5', name: 'Edur'}},
                    {restaurant: {id: '6', name: 'Whiskeyjack'}}
                ],
                expandable: false
            }
    
            const propsErrors = checkProps(ListWrapper, props);
    
            expect(propsErrors).toBeUndefined();
        })
    });

    describe('Checking rendering', () => {
        let component;

        beforeEach(() => {
            const props = {
                title: 'Best restaurants',
                subtitle: 'Check the best restaurants in town',
                component: 'restaurant',
                list: [
                    {restaurant: {id: '1', name: 'Aioli'}},
                    {restaurant: {id: '2', name: 'Liosan' }},
                    {restaurant: {id: '3', name: 'Starvald'}},
                    {restaurant: {id: '4', name: 'Tiste' }},
                    {restaurant: {id: '5', name: 'Edur'}},
                    {restaurant: {id: '6', name: 'Whiskeyjack'}}
                ],
                expandable: true
            }

            component = setUpTest(ListWrapper, {...props})
        });


        it('Should render without errors', () => {
            const ListWrapper = findByTestAttribute(component, 'ListWrapper');
            expect(ListWrapper).toHaveLength(1);
        });


        it('Should render only two list items', () => {
            const listItem = findByTestAttribute(component, 'ListItem');
            const button = findByTestAttribute(component, 'ShowMoreButton');
            button.dive().simulate('click');
            expect(listItem).toHaveLength(2);
            expect(button).toHaveLength(1);
        });

        
        it('Should render all list items when expandable set to false', () => {
            component.setProps({expandable: false});
            const listItem = findByTestAttribute(component, 'ListItem');
            const button = findByTestAttribute(component, 'ShowMoreButton');

            expect(listItem).toHaveLength(6);
            expect(button).toHaveLength(0);
        })        
    })
})
