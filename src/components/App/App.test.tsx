import { describe, test } from "vitest";
import App from "./App";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import { screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with a heading level 1 and title `Podcaster`", () => {
      const expectedTitle = "Podcaster";

      renderRouterWithProviders(<App />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
