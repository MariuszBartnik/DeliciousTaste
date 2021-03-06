import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

export const setUpTest = (Component, props={}) => {
    const component = shallow(<Component {...props} />);
    return component;
}

export const findByTestAttribute = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErrors = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErrors;
}

export const simulateInputChange = (component, inputElement, inputText) => {
    const changeEvent = {target: {value: inputText}};
    const input = findByTestAttribute(component, inputElement);

    input.simulate('change', changeEvent);
    const changedInput = findByTestAttribute(component, inputElement);

    return changedInput;
}