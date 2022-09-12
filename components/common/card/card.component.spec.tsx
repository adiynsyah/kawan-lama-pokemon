import React from 'react';
import { shallow } from 'enzyme';
import Card from './card.component';

const setUpComp = (props={data: {id: 0, name: '', url: ''}}) => {
  const wrapper = shallow(<Card {...props}/>);
  return wrapper;
};

describe('Card Component', () => {

  let component: any;

  beforeEach(() => {
    component = setUpComp();
  });

  it('should render without error', () => {
    const wrapper = component.find('.card');
    expect(wrapper.length).toBe(1);
  });

   it('should when open detail dialog, open detail must be true', () => {
    const item = component.find('.itemTest').simulate('click');
    expect(item).toBeTruthy();
  });
});


