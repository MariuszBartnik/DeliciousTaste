import SearchPage from './index';

import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';

describe('Search Page Component', () => {
    
    it('Should render without errors', () => {
        const component = setUpTest(SearchPage);
        const wrapper = findByTestAttribute(component, 'SearchPageWrapper');

        expect(wrapper.length).toBe(1);
    })

})