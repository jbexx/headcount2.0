import React from 'react';
import ReactDOM from 'react-dom';
import Comparison from '../../src/Comparison';
import SchoolCard from '../../src/SchoolCard';
import CompareCard from '../../src/CompareCard'
import { mount, shallow } from 'enzyme';

describe('Comparison', () => {
  let wrapper

  const mockData = [{
    Average: 0.407,
    Data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
    DataFormat: "Percent",
    Location: "ACADEMY 20",
    TimeFrame: 2007
  }, {
    Average: 0.53,
    Data: {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741},
    DataFormat: "Percent",
    Location: "COLORADO",
    TimeFrame: 2007
  }]

  const mockFn = jest.fn()

  beforeEach( () => {
    wrapper = shallow(<Comparison cardData={mockData}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })


  it('should render two school-compare cards', () => {
    wrapper = mount(<Comparison cardData={mockData} cardClass={'school-compare'} findAverage={mockFn} districtRatio={mockFn}/>);

    wrapper.instance().findAverage = mockFn;
    wrapper.instance().districtRatio = mockFn;

    expect(wrapper.find('.school-compare')).toBeDefined();
    expect(wrapper.find('.school-compare').length).toEqual(2);
  })

  it('should render one comparison card', () => {
    wrapper = mount(<Comparison cardData={mockData} findAverage={mockFn} districtRatio={mockFn}/>);
    wrapper.instance().findAverage = mockFn;
    wrapper.instance().districtRatio = mockFn;

    expect(wrapper.find('.compare-card')).toBeDefined();
    expect(wrapper.find('.compare-card').length).toEqual(1);
  })

  it('should pass through the correct props', () => {
    expect(wrapper.props()).toHaveProperty('Data', mockData.Data);
    expect(wrapper.props()).toHaveProperty('Location', mockData.Location)
    expect(wrapper.props()).toHaveProperty('Average', mockData.Average)
  })

})
