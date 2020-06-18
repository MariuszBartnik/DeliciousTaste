import Cities from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Cities component', () => {
    
    describe('Checking props', () => {
        it('Should render without warning', () => {
            const cities = [{
                id: 1,
                name: 'New York',
                country_name: 'USA',
                country_flag_url: 'coutry flag url 1'
            },{
                id: 2,
                name: 'Mexico',
                country_name: 'Mexico',
                country_flag_url: 'coutry flag url 2'
            }];

            const propsErrors = checkProps(Cities, cities);

            expect(propsErrors).toBeUndefined();
        })
    })
    
    describe('Checking rendering', () => {
        
        let component;
        beforeAll(() => {
            const cities = [{
                id: 1,
                name: 'New York',
                country_name: 'USA',
                country_flag_url: 'coutry flag url 1'
            },{
                id: 2,
                name: 'Mexico',
                country_name: 'Mexico',
                country_flag_url: 'coutry flag url 2'
            }];

            component = setUpTest(Cities, { cities });           
        })

        it('Should render without errors', () => {
            const wrapper = findByTestAttribute(component, 'CitiesList');
            expect(wrapper.length).toBe(1);
        });

        it('Should render correct number of city item', () => {
            const cityItem = findByTestAttribute(component, 'CityListItem');
            expect(cityItem.length).toBe(2);
        })
    })

    describe('Checking rendering without props', () => {
        // This test should be changes after changing Cities component
        it('Should not render without props', () => {
            const component = setUpTest(Cities);
            const wrapper = findByTestAttribute(component, 'CitiesList');
            expect(wrapper.length).toBe(0);
        })        
    })
})
