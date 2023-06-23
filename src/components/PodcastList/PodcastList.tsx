import { Link } from "react-router-dom";
import { PodcastListStructure, PodcastStructure } from "../../types/types";
import Podcast from "../Podcast/Podcast";
import PodcastListStyled from "./PodcastListStyled";
import { useAppDispatch } from "../../store";
import { loadPodcastActionCreator } from "../../store/features/podcasts/podcastsSlice";

interface PodcastListProps {
  podcasts: PodcastListStructure;
}

const PodcastList = ({ podcasts }: PodcastListProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleLinkOnClick = (podcast: PodcastStructure) => {
    dispatch(loadPodcastActionCreator(podcast));
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
