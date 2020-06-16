import MainPage from './index';

import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';

describe('MainPage component', () => {

    it('Should render without errors', () => {
        const component = setUpTest(MainPage);
        const wrapper = findByTestAttribute(component, 'MainPageWrapper');

        expect(wrapper.length).toBe(1);
    })
})