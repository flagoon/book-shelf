import { shallow } from "enzyme";
import React from "react";
import Bookshelf from "./Bookshelf";

describe("Bookshelf", () => {
  it("should render div with text", () => {
    const component = shallow(<Bookshelf />);
    expect(component.text()).toEqual("Bookshelf");
  });
});
