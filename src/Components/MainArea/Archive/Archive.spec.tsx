import { shallow } from "enzyme";
import React from "react";
import Archive from "./Archive";

describe("Archive", () => {
  it("should render div with text", () => {
    const component = shallow(<Archive />);
    expect(component.text()).toEqual("Archive");
  });
});
