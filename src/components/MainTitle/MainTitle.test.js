import MainTitle from './index';

import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';

describe('MainTitle', () => {
    
    it('Should render without errors', () => {
        const component = setUpTest(MainTitle);
        const wrapper = findByTestAttribute(component, 'MainTitle');

        expect(wrapper.length).toBe(1);
    });

});
