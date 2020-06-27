import MainTitle from './index';

import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';

describe('MainTitle', () => {
    
    it('Should render without errors', () => {
        const component = setUpTest(MainTitle);
        const wrapper = findByTestAttribute(component, 'MainTitle');

        expect(wrapper).toHaveLength(1);
    });

});
