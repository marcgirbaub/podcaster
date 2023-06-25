import { afterEach, describe, test, vi, expect } from "vitest";
import { mockDetailPodcastResponse } from "../../mocks/mockPodcasts";

import getPodcast from "./getPodcast";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a getPodcasts function", () => {
  const id = "12345";
  describe("When invoked with limit 2 and genre 1310 and the request is successful", () => {
    test("Then it should return 2 podcasts", async () => {
      const expectedResponse = mockDetailPodcastResponse;

      const podcasts = await getPodcast(id);

      expect(podcasts.results).toStrictEqual(expectedResponse.results);
    });
  });
});
