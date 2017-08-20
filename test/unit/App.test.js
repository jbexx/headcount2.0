import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/App";
import Search from "../../src/Search";
import SchoolList from "../../src/SchoolList";
import SchoolCard from "../../src/SchoolCard";
import Comparison from "../../src/Comparison";
import { mount, shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render the Search component", () => {
    expect(wrapper.find("Search").length).toEqual(1);
  });

  it("should render the SchoolList component", () => {
    expect(wrapper.find("SchoolList").length).toEqual(1);
  });

  it("should render the Comparison component", () => {
    expect(wrapper.find("Comparison").length).toEqual(1);
  });

  it("should setState with data after component mounts", () => {
    expect(wrapper.state("data")).toEqual({});

    wrapper = mount(<App />);
    const objKeys = Object.keys(wrapper.state("data"));

    expect(objKeys.length).toEqual(181);
  });

  it("should filter cards based on user input", () => {
    expect(wrapper.state("data")).toEqual({});

    wrapper = mount(<App />);

    const searchInput = wrapper.find(".search-bar");
    searchInput.simulate("change", { target: { value: "COL" } });
    const objKeys = Object.keys(wrapper.state("data"));

    expect(objKeys.length).toEqual(2);
  });

  it("should update comparison array after having clicked a card", () => {
    expect(wrapper.state("compareCards").length).toEqual(0);
    wrapper = mount(<App />);

    const card = wrapper.find(".school-card").first();
    card.simulate("click");
    expect(wrapper.state("compareCards").length).toEqual(1);
  });

  it("should not update state when there are 2 cards in compareCards array", () => {
    expect(wrapper.state("compareCards").length).toEqual(0);
    wrapper = mount(<App />);

    const card = wrapper.find(".school-card").at(0);
    card.simulate("click");
    const card2 = wrapper.find(".school-card").at(1);
    card2.simulate("click");
    const card3 = wrapper.find(".school-card").at(2);
    card3.simulate("click");
    expect(wrapper.state("compareCards").length).toEqual(2);
  });

  it("should render cards in the compareCards array", () => {
    wrapper = mount(<App />);

    const compareDiv = wrapper.find(".compare-cards");
    const card = wrapper.find(".school-card").at(0);

    card.simulate("click");
    // expect(compareDiv.contains(card)).toEqual(true);
    expect(compareDiv.find(".school-compare").length).toEqual(1);

    const card2 = wrapper.find(".school-card").at(1);
    card2.simulate("click");

    // expect(compareDiv.contains(card2)).toEqual(true);
    expect(compareDiv.find(".school-compare").length).toEqual(2);
  });

  it("should create compareCard when 2 cards have been clicked", () => {
    wrapper = mount(<App />);

    const compareDiv = wrapper.find(".compare-cards");
    const card = wrapper.find(".school-card").at(0);

    card.simulate("click");
    expect(compareDiv.length).toEqual(1);

    const card2 = wrapper.find(".school-card").at(1);
    card2.simulate("click");

    expect(compareDiv.find(".compare-card").length).toEqual(1);
  });

  it("should remove card from array if clicked twice", () => {
    expect(wrapper.state("compareCards").length).toEqual(0);
    wrapper = mount(<App />);

    const card = wrapper.find(".school-card").first();
    card.simulate("click");
    expect(wrapper.state("compareCards").length).toEqual(1);
    card.simulate("click");
    expect(wrapper.state("compareCards").length).toEqual(0);
  });
});
