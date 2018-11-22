import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';

it('expect to render Card component', () => {
    //expect(shallow(<Card />).length).toEqual(1);
    expect(shallow(<Card />)).toMatchSnapshot();
});

//mount does a full render, and mounts the component on a dom
//render is used to render to a static html
