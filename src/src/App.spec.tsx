import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("renders without crashing", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
