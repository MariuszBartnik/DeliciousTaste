import SearchForm from './index';

import {setUpTest, findByTestAttribute, simulateInputChange} from '../../shared/scripts/testUtils';

describe('Search Form component', () => {

    let component;

    beforeAll(() => {
        component = setUpTest(SearchForm);
    })

    it('Should render form and input', () => {
        const form = findByTestAttribute(component, 'SearchForm');
        const input = findByTestAttribute(component, 'SearchInput');

        expect(form).toHaveLength(1);
        expect(input).toHaveLength(1);
    });

    it('Should change input value', () => {
        const InputText = 'Warsaw';
        let modifiedInput = simulateInputChange(component, 'SearchInput', InputText);
        expect(modifiedInput.props().value).toEqual(InputText);
    })

});
