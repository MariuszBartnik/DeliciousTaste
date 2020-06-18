import RestaurantBasicInfo from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';
import RestaurantTopBar from '../RestaurantTopBar';

describe('Restaurant Basic Info component', () => {
    
    describe('Checking propTypes', () => {
        
        it('Should render without warning', () => {
            const props = {
                cuisines: 'Italian, Polish, Chinease',
                highlights: ['Highliht 1', 'Highliht 2', 'Highliht 3']
            };

            const propsErrors = checkProps(RestaurantBasicInfo, props);

            expect(propsErrors).toBeUndefined();
        });
    });

    describe('Checking rendering', () => {
        
        let component;
        beforeAll(() => {
            const props = {
                cuisines: 'Italian, Polish, Chinease',
                highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3']
            };

            component = setUpTest(RestaurantBasicInfo, {...props});
        })

        it('Should render without props', () => {
            const wrapper = findByTestAttribute(component, 'RestaurantBasicInfo');
            expect(wrapper.length).toBe(1);
        });

        it('Should render with correct number of cuisine items', () => {
            const cuisinesItems = findByTestAttribute(component, 'Cuisine');
            expect(cuisinesItems.length).toBe(3);
        })

        it('Should render with correct first highlight name', () => {
            const highlight = findByTestAttribute(component, 'Highlight');
            expect(highlight.first().text()).toEqual('Highlight 1');
        })
    });
    
    
});
