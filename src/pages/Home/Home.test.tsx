import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import Home from "./Home";

describe("Given a Home component", () => {
  describe("When rendered", () => {
    test("Then it should show an input to filter podcasts", () => {
      renderWithProviders(<Home />);

      const input = screen.getByRole("textbox");

      expect(input).toBeInTheDocument();
    });
  });
});
