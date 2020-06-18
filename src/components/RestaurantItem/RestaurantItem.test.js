import RestaurantItem from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Restaurant Item component', () => {
    
    describe('Checking propTypes', () => {
        
        it('Should render without warning', () => {
            const expectedProps = {
                id: "id",
                name: "restaurant name",
                location: {
                    address: 'Restaurant address'
                },
                thumb: "thumbnail url",
                user_rating: {
                    aggregate_rating: '5.0',
                    rating_color: 'f1f1f1'
                }
            };
      
            const propsErrors = checkProps(RestaurantItem, expectedProps);

            expect(propsErrors).toBeUndefined();
        });
    });

    describe('Checking rendering', () => {

        let component;

        beforeAll(() => {
            const expectedProps = {
                id: "id",
                name: "restaurant name",
                location: {
                    address: 'Restaurant address'
                },
                thumb: "thumbnail url",
                user_rating: {
                    aggregate_rating: '5.0',
                    rating_color: 'f1f1f1'
                }
            };

            component = setUpTest(RestaurantItem, {restaurant: expectedProps});
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttribute(component, 'RestaurantItem');
            expect(wrapper.length).toBe(1);
        });
        

        it('Should render with correct restaurant name', () => {
            const restaurantName = findByTestAttribute(component, 'RestaurantName');
            expect(restaurantName.text()).toEqual('restaurant name');
        });
    });
    
    
});
