import { describe } from "vitest";
import Layout from "./Layout";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import { screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the title `Podcaster`", () => {
      const expectedTitle = "Podcaster";

      renderRouterWithProviders(<Layout />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
