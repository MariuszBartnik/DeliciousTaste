import React from 'react';
import { shallow } from 'enzyme';

export const setUpTest = (Component, props={}) => {
    const component = shallow(<Component {...props} />);
    return component;
}

export const findByTestAttribute = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}