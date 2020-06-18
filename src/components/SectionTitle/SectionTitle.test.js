import React from 'react';
import { shallow } from 'enzyme';
import SectionTitle from './index';

describe('Section Title component', () => {

    it('Should render without crashing',() => {
        const component = shallow(
            <SectionTitle>
                <h3>Best restaurants</h3>
            </SectionTitle>
        );
        
        expect(component.find('h3').text()).toEqual('Best restaurants');
    })
    
})
