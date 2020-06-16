import Cities from '../components/Cities';
import CityItem from '../components/CityItem';

import { setUpTest, findByTestAttribute } from '../shared/testUtils';

describe('Cities component', () => {
    
    let component;
    beforeAll(() => {
        const citiesList = [
                {
                    id: 109,
                    name: "Warsaw",
                    country_name: "Poland",
                    country_flag_url: "https://b.zmtcdn.com/images/countries/flags/country_163.png"
                },
                {
                  id: 5299,
                  name: "Warsaw, IL",
                  country_name: "United States",
                  country_flag_url: "https://b.zmtcdn.com/images/countries/flags/country_216.png"
                }
        ];

        component = setUpTest(Cities, {cities: citiesList} )
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'CityListWrapper');
        expect(wrapper.length).toBe(1);
    })

    it('Should render list of CityItem components', () => {
        const cityItems = findByTestAttribute(component, 'CityListItem');
        expect(cityItems.length).toBe(2);
    })

})

describe('City Item Component', () => {
    
    let component;
    beforeAll(() => {
        const city = {
            id: 5299,
            name: "Warsaw, IL",
            country_name: "United States",
            country_flag_url: "https://b.zmtcdn.com/images/countries/flags/country_216.png"
        }

        component = setUpTest(CityItem, { city });
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'CityItemWrapper');
        expect(wrapper.length).toBe(1);
    });

    it('Should render city name correctly', () => {
        const cityName = findByTestAttribute(component, 'CityName');
        expect(cityName.text()).toEqual('Warsaw, IL');
    })
})
