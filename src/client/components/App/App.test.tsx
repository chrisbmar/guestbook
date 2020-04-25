import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { createStore, StoreProvider } from "easy-peasy";
import model from "../../model/index";
import { App } from "./index";
import { Home } from "../Home/index";
import { About } from "../About/index";

describe("<App /> routes are rendered", () => {
  const store = createStore(model);

  const testRouterHelperFn = (route: string): ReactWrapper => {
    return mount(
      <MemoryRouter initialEntries={[`${route}`]}>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </MemoryRouter>
    );
  };

  it("should show Home component for / router", () => {
    const component = testRouterHelperFn("/");
    expect(component.find(Home)).toHaveLength(1);
  });

  it("should show About component for /about router", () => {
    const component = testRouterHelperFn("/about");
    expect(component.find(About)).toHaveLength(1);
  });

  it("should redirect to home component for route not defined", () => {
    const component = testRouterHelperFn("/notdefined");
    expect(component.find(Home)).toHaveLength(1);
  });
});
