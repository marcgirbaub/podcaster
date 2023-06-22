import { describe, expect, test } from "vitest";
import { PodcastsState } from "../../store/features/podcasts/types";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import PodcastProfile from "./PodcastProfile";
import { screen } from "@testing-library/react";

describe("Given a PodcastProfile component", () => {
  describe("When rendered with the Friday Night Karaoke podcast", () => {
    test("Then it should show its image, name and description", () => {
      const mockPodcast: PodcastsState = {
        name: "Friday Night Karaoke",
        artist: "Friday Night Karaoke",
        description: "No ads, no gimmicks - just Karaoke!",
        image: "podcastFakeImage.jpg",
        id: "1234",
      };

      renderRouterWithProviders(<PodcastProfile podcast={mockPodcast} />);

      const titleElement = screen.getByRole("heading", {
        level: 3,
        name: mockPodcast.name,
      });
      const descriptionElement = screen.getByText(mockPodcast.description);
      const podcastPoster = screen.getByRole("img", {
        name: `${mockPodcast.name} official poster`,
      });

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(podcastPoster).toBeInTheDocument();
    });
  });
});
