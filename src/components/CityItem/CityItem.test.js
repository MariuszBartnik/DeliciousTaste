import CityItem from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('City Item component', () => {
  
    describe('Checking propTypes', () => {
        it('Should render without warning', () => {
            const city = {
                id: 1,
                name: 'New Orlean',
                country_name: 'United States',
                country_flag_url: 'url to country flag'
            };
    
            const propsErrors = checkProps(CityItem, city);
            expect(propsErrors).toBeUndefined();
        });
    });

    describe('Checking rendering', () => {
        it('Should render with correct city name', () => {
            const city = {
                id: 1,
                name: 'New Orlean',
                country_name: 'United States',
                country_flag_url: 'url to country flag'
            };
            
            const component = setUpTest(CityItem, { city });
            const cityName = findByTestAttribute(component, 'CityName');

            expect(cityName.text()).toEqual('New Orlean');
        })
    });

});
