import { genreParam, limitParam, podcastsListEndpoint } from "./apiEndpoints";

const getPodcastsUrl = (limit: number, genre: number) => {
  return `${podcastsListEndpoint}${limitParam}=${limit}/${genreParam}=${genre}/json`;
};

export default getPodcastsUrl;
