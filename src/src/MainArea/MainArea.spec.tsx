import { shallow } from "enzyme";
import React from "react";
import MainArea from "./MainArea";

describe("MainArea component", () => {
  it("should render Bookshelf component with proper props", () => {
    const component = shallow(<MainArea activePage="bookShelf" />);
    expect(component.find("Bookshelf")).toHaveLength(1);
  });

  it("should render Bookshelf component with proper props", () => {
    const component = shallow(<MainArea activePage="addBookForm" />);
    expect(component.find("AddBookForm")).toHaveLength(1);
  });

  it("should render Bookshelf component with proper props", () => {
    const component = shallow(<MainArea activePage="archive" />);
    expect(component.find("Archive")).toHaveLength(1);
  });
});
