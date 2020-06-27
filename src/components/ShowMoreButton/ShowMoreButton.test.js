import ShowMoreButton from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Show More Button', () => {
    
    describe('Checking props', () => {
        it('Should render without warning', () => {
            const props = {
                showMore: false,
                toggleShowMore: () => {}
            }
            const propsErrors = checkProps(ShowMoreButton, props);

            expect(propsErrors).toBeUndefined();
        })
    });
    
    describe('Checking redering', () => {
        it('Should render without errors', () => {
            const props = {
                showMore: false,
                toggleShowMore: () => {}
            }

            const component = setUpTest(ShowMoreButton, {...props});
            const button = findByTestAttribute(component, 'ShowMoreButton');

            expect(button.length).toBe(1);
        });
    });

    describe('Checking functions', () => {
        it('Should get triggered once', () => {
            const mockFunction = jest.fn(() => {})
            const props = {
                showMore: false,
                toggleShowMore: mockFunction
            }

            const component = setUpTest(ShowMoreButton, {...props});
            const button = findByTestAttribute(component, 'ShowMoreButton');
            
            button.at(0).simulate('click');

            expect(mockFunction).toBeCalledTimes(1);
        })
    })
    
})
