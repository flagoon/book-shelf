import { shallow } from "enzyme";
import React from "react";
import LeftMenu from "./LeftMenu";

describe("Left Menu", () => {
  it("should render 3 <MenuListItem /> component", () => {
    const component = shallow(<LeftMenu />);
    expect(component.find(".menuItem")).toHaveLength(3);
  });
});
