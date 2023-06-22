import { Link } from "react-router-dom";
import { PodcastListStructure, PodcastStructure } from "../../types/types";
import Podcast from "../Podcast/Podcast";
import PodcastListStyled from "./PodcastListStyled";
import useLoadPodcast from "../../hooks/useLoadPodcast/useLoadPodcast";

interface PodcastListProps {
  podcasts: PodcastListStructure;
}

const PodcastList = ({ podcasts }: PodcastListProps): JSX.Element => {
  const { loadPodcast } = useLoadPodcast();

  const handleLinkOnClick = (podcast: PodcastStructure) => {
    loadPodcast(podcast);
  };

  return (
    <PodcastListStyled>
      {podcasts.map((podcast) => (
        <li key={podcast.id.attributes["im:id"]}>
          <Link
            to={`podcast/${podcast.id.attributes["im:id"]}`}
            onClick={() => handleLinkOnClick(podcast)}
          >
            <Podcast podcast={podcast} />
          </Link>
        </li>
      ))}
    </PodcastListStyled>
  );
};

export default PodcastList;
