import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../src/Search';
import { mount, shallow } from 'enzyme';

describe('Search', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<Search />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it.skip('should fire a function on change', () => {
    const searchInput = wrapper.find('.search-bar');
    const mockFn = jest.fn()

    wrapper = mount(<Search findSchool={mockFn} />);

    expect(mockFn).toHaveBeenCalledTimes(0);

    searchInput.simulate('change', { target: { value: 'COLORADO'} });

    expect(mockFn).toHaveBeenCalledTimes(8);
  })
})
