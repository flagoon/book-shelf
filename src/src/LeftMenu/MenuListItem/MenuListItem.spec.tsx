import { mount } from "enzyme";
import React from "react";
import MenuListItem from "./MenuListItem";

describe("MenuListItem", () => {
  it("should render list item with text", () => {
    const component = mount(<MenuListItem className="test">Test</MenuListItem>);
    expect(component.text()).toEqual("Test");
  });
});
