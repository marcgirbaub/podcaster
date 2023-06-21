import { describe, test, expect } from "vitest";
import { joeBuddenPodcast } from "../../mocks/mockPodcasts";
import { render, screen } from "@testing-library/react";
import Podcast from "./Podcast";

describe("Given a Podcast component", () => {
  describe("When rendered with the Joe Budden podcast", () => {
    test("Then it should show the podcast name, artist and image", () => {
      const expectedName = joeBuddenPodcast["im:name"].label;
      const expectedArtist = joeBuddenPodcast["im:artist"].label;
      const expectedImageAlt = `${joeBuddenPodcast["im:name"].label} official poster`;

      render(<Podcast podcast={joeBuddenPodcast} />);

      const podcastName = screen.getByText(expectedName);
      const podcastArtist = screen.getByText(`Author: ${expectedArtist}`);
      const podcastImage = screen.getByRole("img", { name: expectedImageAlt });

      expect(podcastImage).toBeInTheDocument();
      expect(podcastArtist).toBeInTheDocument();
      expect(podcastName).toBeInTheDocument();
    });
  });
});
