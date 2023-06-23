import { useQuery } from "react-query";
import getPodcasts from "../../api/getPodcasts/getPodcasts";
import { getPodcastsQuery } from "../../utils/queryKeys";
import { TopPodcastsResponse } from "../../types/types";

interface useGetPodcastsStructure {
  data: TopPodcastsResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  isFetching: boolean;
}

const useGetPodcasts = (
  limit: number,
  genre: number
): useGetPodcastsStructure => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    getPodcastsQuery,
    () => getPodcasts(limit, genre)
  );

  return { data, isLoading, isError, error, isFetching };
};

export default useGetPodcasts;
