import React from "react";
import FilterForm from "../filter_form";
import { shallow } from "enzyme";

const setup = () => {
  const props = {
    minSeating: 2,
    maxSeating: 5,
    updateFilter: jest.fn()
  };

  const filterFormWrapper = shallow(<FilterForm {...props} />);

  return {
    filterFormWrapper,
    props
  };
};

describe("FilterForm", () => {
  const { filterFormWrapper, props } = setup();

  test("should render input elements", () => {
    // code here
  });

  test("minSeating filter defaults to the passed in props of minSeating", () => {
    // your code here
  });

  test("maxSeating filter defaults to the passed in props of minSeating", () => {
    // your code here
  });

  test("updates filter onChange", () => {
    // your code here
    // hint: https://facebook.github.io/jest/docs/en/mock-functions.html
  });
});
