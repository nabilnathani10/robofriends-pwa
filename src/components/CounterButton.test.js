import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red'
    //creat a wrapper for the CounterButton component
    const wrapper = shallow(<CounterButton color={mockColor} />);

    //find the element with id="counter". and simulate a click
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');

    //check the state
    expect(wrapper.state()).toEqual({ count: 3 });
    expect(wrapper.props().color).toEqual('red');
});

