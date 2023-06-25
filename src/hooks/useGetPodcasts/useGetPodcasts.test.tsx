import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import useGetPodcasts from "./useGetPodcasts";
import Wrapper from "../../utils/Wrapper";
import { mockPodcastsResponse } from "../../mocks/mockPodcasts";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a useGetPodcasts hook", () => {
  const limit = 2;
  const genre = 1310;

  describe("When rendered with a limit of 2 and a genre of 1310 and the request is successful", () => {
    test("Then it should return and object with a data property with the 2 podcasts", async () => {
      const expectedPodcasts = mockPodcastsResponse;

      const { result } = renderHook(() => useGetPodcasts(limit, genre), {
        wrapper: Wrapper,
      });

      await waitFor(() =>
        expect(result.current.data?.feed).toStrictEqual(expectedPodcasts.feed)
      );
    });
  });

  describe("When the request is failed and there is an error", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));

    test("Then the property data should be undefined", async () => {
      const expectedData = undefined;

      const { result } = renderHook(() => useGetPodcasts(limit, genre), {
        wrapper: Wrapper,
      });

      await waitFor(() => expect(result.current.data).toBe(expectedData));
    });
  });
});
