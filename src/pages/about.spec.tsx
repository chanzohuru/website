import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AboutPage from "./about";

describe("about page", () => {
  it("renders without errors", async () => {
    expect.assertions(0);

    render(<AboutPage />);
  });
});
