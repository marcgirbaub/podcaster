import PodcastProfile from "../../components/PodcastProfile/PodcastProfile";
import { useAppSelector } from "../../store";

const DetailPodcastPage = (): JSX.Element => {
  const podcast = useAppSelector((state) => state.podcasts);

  return <PodcastProfile podcast={podcast} />;
};

export default DetailPodcastPage;
