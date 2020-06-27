import ContactDetailsBar from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Contact Details Bar', () => {
    
    describe('Checking props', () => {
       it('Should render wihtout warning', () => {
           const props = {
            phone: '(212) 388-0088',
            address: '65 4th Avenue, New York 10003',
            menu_url: 'https://image.com/restaurant/aioli'
           }

           const propsErrors = checkProps(ContactDetailsBar, props);

           expect(propsErrors).toBeUndefined();
       }) 
    });

    describe('Checking rendering', () => {
        it('Should render all contact details', () => {
            const component = setUpTest(ContactDetailsBar);
            const contactDetails = findByTestAttribute(component, 'ContactDetails');

            expect(contactDetails).toHaveLength(3);
        })
    });
})

