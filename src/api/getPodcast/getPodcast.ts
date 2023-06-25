import { AxiosResponse } from "axios";
import apiClient from "../apiClient";
import {
  entityParam,
  limitNumber,
  mediaParam,
  podcastEpisodesEndpoint,
} from "../apiEndpoints";
import { PodcastEpisodesApiResponse } from "../../types/types";
import isDataExpired from "../../utils/isDataExpired";

const getPodcast = async (id: string) => {
  const url = `${podcastEpisodesEndpoint}&media=${mediaParam}&entity=${entityParam}&id=${id}&limit=${limitNumber}`;

  const localStoragedData = JSON.parse(
    localStorage.getItem(url) as string
  ) as PodcastEpisodesApiResponse;

  if (localStoragedData && !isDataExpired(localStoragedData)) {
    return localStoragedData;
  }

  localStorage.removeItem(url);

  const response: AxiosResponse<PodcastEpisodesApiResponse> =
    await apiClient.get(podcastEpisodesEndpoint, {
      params: {
        media: mediaParam,
        entity: entityParam,
        id,
        limit: limitNumber,
      },
    });

  response.data.fetchDate = Date.now();

  localStorage.setItem(url, JSON.stringify(response.data));

  return response.data;
};

export default getPodcast;
