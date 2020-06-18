import RestaurantTopBar from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Restaurant Top Bar component', () => {
    
    describe('Checking propTypes', () => {
        
        it('Should render without warning', () => {
            const props = {
                name: 'Restaurant Name',
                phone: '+48 778 12 12',
                address: 'New York 5th Avenue',
                bg_img: 'https://www.google.com'
            }

            const propsErrors = checkProps(RestaurantTopBar, props);
            expect(propsErrors).toBeUndefined();
        });

    })

    describe('Checking rendering', () => {
        
        it('Should render without errors', () => {
            const props = {
                name: 'Restaurant Name',
                phone: '+48 778 12 12',
                address: 'New York 5th Avenue',
                bg_img: 'https://www.google.com'
            }

            const component = setUpTest(RestaurantTopBar, {...props});
            const wrapper = findByTestAttribute(component, 'RestaurantTopBar');

            expect(wrapper.length).toBe(1);
        })
    })
    
})
