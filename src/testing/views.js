import MainPage from '../views/MainPage';
// import CityDetailsPage from '../views/CityDetailsPage';
// import CityListPage from '../views/CityListPage';
// import RestaurantDetailsPage from '../views/RestaurantDetailsPage';
import SearchPage from '../views/SearchPage';

import { setUpTest, findByTestAttribute } from '../shared/testUtils';

    // ** MAIN PAGE COMPONENT **
describe('MainPage component', () => {
    
    it('Should render without errors', () => {
        const component = setUpTest(MainPage);
        const wrapper = findByTestAttribute(component, 'MainPageWrapper');

        expect(wrapper.length).toBe(1);
    })
})

    // ** SEARCH PAGE COMPONENT **

describe('Search Page Component', () => {
    
    it('Should render without errors', () => {
        const component = setUpTest(SearchPage);
        const wrapper = findByTestAttribute(component, 'SearchPageWrapper');

        expect(wrapper.length).toBe(1);
    })

})