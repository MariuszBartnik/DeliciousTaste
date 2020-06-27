import CityTopBar from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('CityTopBar', () => {
    describe('Checking props', () => {
        const props = {
            city: 'Warsaw',
            nightlife_index: '5.0',
            popularity: '4.9'
        }
        const propsErrors = checkProps(CityTopBar, props);

        expect(propsErrors).toBeUndefined();
    })
    
    describe('Checking rendering', () => {
        it('Should render with correct city name', () => {
            const props = {
                city: 'Warsaw',
                nightlife_index: '5.0',
                popularity: '4.9'
            }
            const component = setUpTest(CityTopBar, {...props});
            const cityName = findByTestAttribute(component, 'CityName');
    
            expect(cityName.text()).toEqual('Warsaw');
        })
        
        it('Should render with default nightlife_index', () => {
            const props = {
                city: 'Warsaw',
                popularity: '4.9'
            }
            const component = setUpTest(CityTopBar, {...props});
            const nightlifeIndex = findByTestAttribute(component, 'NightlifeIndex');
    
            expect(nightlifeIndex.text()).toEqual('-');
        })
    })
    
})
