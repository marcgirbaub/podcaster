import { AxiosResponse } from "axios";
import apiClient from "../apiClient";
import getPodcastsUrl from "../getPodcastsUrl/getPodcastsUrl";
import { TopPodcastsResponse } from "../../types/types";

const getPodcasts = async (limit: number, genre: number) => {
  const response: AxiosResponse<TopPodcastsResponse> = await apiClient.get(
    getPodcastsUrl(limit, genre)
  );

  return response.data;
};

export default getPodcasts;
