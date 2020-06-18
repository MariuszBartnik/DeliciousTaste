import GalleryGrid from './index';

import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';

describe('MainTitle', () => {
    
    it('Should render without errors', () => {
        const component = setUpTest(GalleryGrid);
        const wrapper = findByTestAttribute(component, 'GalleryGrid');

        expect(wrapper.length).toBe(1);
    });

});
