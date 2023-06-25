import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi, afterEach } from "vitest";
import Wrapper from "../../utils/Wrapper";
import { mockDetailPodcastResponse } from "../../mocks/mockPodcasts";
import useLoadPodcast from "./useLoadPodcast";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a useLoadPodcast hook", () => {
  const id = "12345";

  describe("When rendered with the id 12345", () => {
    test("Then it should return and object with a results", async () => {
      const expectedPodcasts = mockDetailPodcastResponse;

      const { result } = renderHook(() => useLoadPodcast(id), {
        wrapper: Wrapper,
      });

      await waitFor(() =>
        expect(result.current.data?.results).toStrictEqual(
          expectedPodcasts.results
        )
      );
    });
  });
});
