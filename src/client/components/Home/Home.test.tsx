import React from "react";
import { Card } from "@material-ui/core";
import { mount, ReactWrapper } from "enzyme";
import { Home } from "./index";

describe("<Home />", () => {
  const entries = [
    {
      name: "Test 1",
      content: "Testing the content",
      submitted: "4/24/2020",
      id: 1,
    },
    {
      name: "Test 2",
      content: "Testing the content",
      submitted: "4/24/2020",
      id: 2,
    },
    {
      name: "Test 3",
      content: "Testing the content",
      submitted: "4/24/2020",
      id: 3,
    },
  ];

  const createEntry = jest.fn();

  let component: ReactWrapper;

  beforeAll(() => {
    component = mount(<Home entries={entries} createEntry={createEntry} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders correctly with props", () => {
    expect(component).toHaveLength(1);
    expect(component.prop("entries")).toEqual(entries);
    expect(component.prop("createEntry")).toBeDefined();
  });

  it("renders 3 Cards", () => {
    expect(component.find(Card)).toHaveLength(3);
  });
});
