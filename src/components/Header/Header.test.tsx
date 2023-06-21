import { describe, test, expect } from "vitest";
import Header from "./Header";
import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";

describe("Given a Header component", () => {
  describe("WHen rendered", () => {
    test("Then it should show a heading level 1 with the title `Podcaster`", () => {
      const expectedTitle = "Podcaster";

      renderRouterWithProviders(<Header />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
