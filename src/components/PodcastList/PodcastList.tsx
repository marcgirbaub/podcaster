import { Link } from "react-router-dom";
import { PodcastListStructure } from "../../types/types";
import Podcast from "../Podcast/Podcast";
import PodcastListStyled from "./PodcastListStyled";

interface PodcastListProps {
  podcasts: PodcastListStructure;
}

const PodcastList = ({ podcasts }: PodcastListProps): JSX.Element => {
  return (
    <PodcastListStyled>
      {podcasts.map((podcast) => (
        <li key={podcast.id.attributes["im:id"]}>
          <Link to={`podcast/${podcast.id.attributes["im:id"]}`}>
            <Podcast podcast={podcast} />
          </Link>
        </li>
      ))}
    </PodcastListStyled>
  );
};

export default PodcastList;
