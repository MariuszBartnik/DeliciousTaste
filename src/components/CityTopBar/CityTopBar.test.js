import CityTopBar from './index';

import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';

describe('CityTopBar', () => {
    it('Should render with correct city name', () => {
        const component = setUpTest(CityTopBar, {city: 'Warsaw', nightlife_index: '5.0', popularity: '5.0'});
        const cityName = findByTestAttribute(component, 'CityName');

        expect(cityName.text()).toEqual('Warsaw');
    })
})
