import { shallow } from "enzyme";
import React from "react";
import AddBookForm from "./AddBookForm";

describe("AddBookForm", () => {
  it("should render div with text", () => {
    const component = shallow(<AddBookForm />);
    expect(component.text()).toEqual("AddBookForm");
  });
});
