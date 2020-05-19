import App from "../src/App";
import React from "react";
import { shallow } from "enzyme";

describe('App', () => {
    test('should match snapshop', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find('h1').text()).toBe('Welcome to My Starter App');
        expect(wrapper).toMatchSnapshot
    })
})