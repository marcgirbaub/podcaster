import { useQuery } from "react-query";
import { getPodcastEpisodesQuery } from "../../utils/queryKeys";
import getPodcast from "../../api/getPodcast/getPodcast";
import useGetPodcasts from "../useGetPodcasts/useGetPodcasts";
import { genre, limit } from "../../api/apiEndpoints";

const useLoadPodcast = (id: string) => {
  const { data, isError, error, isLoading, isFetching } = useQuery(
    getPodcastEpisodesQuery,
    () => getPodcast(id)
  );

  const { data: podcastsList } = useGetPodcasts(limit, genre);

  const podcastDetail = podcastsList?.feed.entry.find(
    (podcast) => podcast.id.attributes["im:id"] === id
  );

  return { data, isError, isLoading, error, isFetching, podcastDetail };
};

export default useLoadPodcast;
