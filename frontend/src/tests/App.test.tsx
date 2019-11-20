import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";

test("App renders without crashing", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
