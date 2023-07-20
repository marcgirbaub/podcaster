import { AxiosResponse } from "axios";
import apiClient from "../apiClient";
import getPodcastsUrl from "../getPodcastsUrl/getPodcastsUrl";
import { TopPodcastsResponse } from "../../types/types";
import isDataExpired from "../../utils/isDataExpired";
import { plainUrl } from "../apiEndpoints";

const getPodcasts = async (limit: number, genre: number) => {
  const url = getPodcastsUrl(limit, genre);

  const localStoragedData = JSON.parse(
    localStorage.getItem(url) as string
  ) as TopPodcastsResponse;

  if (localStoragedData && !isDataExpired(localStoragedData)) {
    return localStoragedData;
  }

  localStorage.removeItem(url);

  try {
    const response: AxiosResponse<TopPodcastsResponse> = await apiClient.get(
      `${plainUrl}${url}`
    );

    response.data.fetchDate = Date.now();

    try {
      localStorage.setItem(url, JSON.stringify(response.data));
    } catch (error) {
      localStorage.clear();
      localStorage.setItem(url, JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    const response: AxiosResponse<TopPodcastsResponse> = await apiClient.get(
      url
    );

    response.data.fetchDate = Date.now();

    try {
      localStorage.setItem(url, JSON.stringify(response.data));
    } catch (error) {
      localStorage.clear();
      localStorage.setItem(url, JSON.stringify(response.data));
    }

    return response.data;
  }
};

export default getPodcasts;
