import TopCuisines from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Top Cuisines component', () => {

    describe('Checking props', () => {
        
        it('Should render without warning', () => {
            const props = {
                city: 'Warsaw',
                cuisines: ['Polish', 'Italian', 'Chinease']
            }

            const propsErrors = checkProps(TopCuisines, props);
            expect(propsErrors).toBeUndefined();
        })
    })
    

    describe('Checking render', () => {
        
        let component;
    
        beforeAll(() => {
            const cuisines = ['Polish', 'Italian', 'Chinease'];
            component = setUpTest(TopCuisines, {city: 'Warsaw', cuisines});
        });
        
        
        it('Should render correct number of cuisines items', () => {
            const cuisineItem = findByTestAttribute(component, 'CuisineItem');
            expect(cuisineItem.length).toBe(3);
        });
    
        it('Should render with correct cuisine name', () => {
            const cuisineItem = findByTestAttribute(component, 'CuisineItem');
            expect(cuisineItem.at(1).text()).toEqual('Italian');
        });
    })
    
});
