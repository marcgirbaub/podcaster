import { describe, expect, test } from "vitest";
import { fridayNightPodcast, joeBuddenPodcast } from "../../mocks/mockPodcasts";
import { render, screen } from "@testing-library/react";
import PodcastList from "./PodcastList";
import { PodcastListStructure } from "../../types/types";

describe("Given a PodcastList component", () => {
  describe("When rendered with a list of two Podcasts", () => {
    test("Then it should show their images", () => {
      const joeBuddenPodcastName = joeBuddenPodcast["im:name"].label;
      const fridayNightPodcastName = fridayNightPodcast["im:name"].label;
      const podcastsList: PodcastListStructure = [
        joeBuddenPodcast,
        fridayNightPodcast,
      ];

      render(<PodcastList podcasts={podcastsList} />);

      const joeBuddenPodcastImage = screen.getByRole("img", {
        name: `${joeBuddenPodcastName} official poster`,
      });
      const fridayNightPodcastImage = screen.getByRole("img", {
        name: `${fridayNightPodcastName} official poster`,
      });

      expect(joeBuddenPodcastImage).toBeInTheDocument();
      expect(fridayNightPodcastImage).toBeInTheDocument();
    });
  });
});
