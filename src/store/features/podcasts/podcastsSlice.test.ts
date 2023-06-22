import { describe, expect, test } from "vitest";
import { PodcastStructure } from "../../../types/types";
import { joeBuddenPodcast } from "../../../mocks/mockPodcasts";
import {
  initialPodcastsState,
  loadPodcastActionCreator,
  podcastsReducer,
} from "./podcastsSlice";
import { PodcastsState } from "./types";

describe("Given a podcastsReducer reducer", () => {
  describe("When it receives the action to load a podcasts with a given podcast", () => {
    test("Then it should return a new state with the data of the provided podcasts loaded", () => {
      const podcastToLoad: PodcastStructure = joeBuddenPodcast;
      const expectedNewState: PodcastsState = {
        name: podcastToLoad["im:name"].label,
        artist: podcastToLoad["im:artist"].label,
        description: podcastToLoad.summary.label,
        image: podcastToLoad["im:image"][2].label,
        id: podcastToLoad.id.attributes["im:id"],
      };

      const loadPodcastAction = loadPodcastActionCreator(podcastToLoad);

      const newState = podcastsReducer(initialPodcastsState, loadPodcastAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
