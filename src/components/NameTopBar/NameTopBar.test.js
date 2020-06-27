import NameTopBar from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Name Top Bar component', () => {
    
    describe('Checking propTypes', () => {
        
        it('Should render without warning', () => {
            const props = {
                name: 'Restaurant Name',
                bg_img: 'https://www.google.com'
            }

            const propsErrors = checkProps(NameTopBar, props);
            expect(propsErrors).toBeUndefined();
        });

    })

    describe('Checking rendering', () => {
        
        it('Should render without errors', () => {
            const props = {
                name: 'Restaurant Name',
                bg_img: 'https://www.google.com'
            }

            const component = setUpTest(NameTopBar, {...props});
            const wrapper = findByTestAttribute(component, 'NameTopBar');

            expect(wrapper).toHaveLength(1);
        })
    })
    
})
