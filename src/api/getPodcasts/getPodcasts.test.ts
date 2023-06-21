import { afterEach, beforeEach, describe, test, vi, expect } from "vitest";
import { mockPodcastsResponse } from "../../mocks/mockPodcasts";
import getPodcasts from "./getPodcasts";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a getPodcasts function", () => {
  describe("When invoked with limit 2 and genre 1310 and the request is successful", () => {
    test("Then it should return 2 podcasts", async () => {
      const limit = 2;
      const genre = 1310;
      const expectedResponse = mockPodcastsResponse;

      const podcasts = await getPodcasts(limit, genre);

      expect(podcasts).toStrictEqual(expectedResponse);
    });
  });

  describe("When there is an error with the request", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));

    test("Then it should throw an error", async () => {
      const limit = 2;
      const genre = 1310;

      await expect(getPodcasts(limit, genre)).rejects.toThrowError();
    });
  });
});
