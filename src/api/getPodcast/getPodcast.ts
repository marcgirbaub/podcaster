import { AxiosResponse } from "axios";
import apiClient from "../apiClient";
import { podcastEpisodesEndpoint } from "../apiEndpoints";
import { PodcastEpisodesApiResponse } from "../../types/types";

const getPodcast = async (id: string) => {
  const response: AxiosResponse<PodcastEpisodesApiResponse> =
    await apiClient.get(podcastEpisodesEndpoint, {
      params: { media: "podcast", entity: "podcastEpisode", id, limit: 200 },
    });

  return response.data;
};

export default getPodcast;
