import {
  PodcastEpisodesApiResponse,
  TopPodcastsResponse,
} from "../types/types";

const isDataExpired = (
  data: TopPodcastsResponse | PodcastEpisodesApiResponse
) => {
  const currentDate = Date.now();

  const timeDifference = (currentDate - data.fetchDate!) / (1000 * 3600);

  return timeDifference > 24;
};

export default isDataExpired;
