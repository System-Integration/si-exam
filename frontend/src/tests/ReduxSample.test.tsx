import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ReduxSample } from "../components/ReduxSample";
import { Provider } from "react-redux";
import rootReducers from "../reducers/rootReducers";

function renderWithRedux(ui: JSX.Element) {
  return {
    ...render(<Provider store={rootReducers}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    rootReducers
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText } = renderWithRedux(<ReduxSample />);
  fireEvent.click(getByText("+"));
  expect(getByTestId("count-value")).toHaveTextContent("1");
});
