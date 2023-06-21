/* eslint-disable no-console */
import { genre, limit } from "../../api/apiEndpoints";
import PodcastList from "../../components/PodcastList/PodcastList";
import useGetPodcasts from "../../hooks/useGetPodcasts/useGetPodcasts";

const Home = (): JSX.Element => {
  const { data, error, isError } = useGetPodcasts(limit, genre);

  if (isError) {
    console.log(error);
  }

  return <>{data && <PodcastList podcasts={data.feed.entry} />}</>;
};

export default Home;
