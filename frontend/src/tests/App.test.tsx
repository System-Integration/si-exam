import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render} from "@testing-library/react"
import App from "../App";

test("App renders without crashing", () => {
  const { container } = render(<App/>);
  expect(container).toBeInTheDocument();
});