import PodcastProfile from "../../components/PodcastProfile/PodcastProfile";
import { useAppSelector } from "../../store";

const DetailEpisodePage = (): JSX.Element => {
  const podcast = useAppSelector((state) => state.podcasts);

  return <PodcastProfile podcast={podcast} />;
};

export default DetailEpisodePage;
