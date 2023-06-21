import { PodcastStructure } from "../../types/types";
import PodcastStyled from "./PodcastStyled";

interface PodcastProps {
  podcast: PodcastStructure;
}

const Podcast = ({ podcast }: PodcastProps): JSX.Element => {
  return (
    <PodcastStyled className="podcast">
      <img
        src={podcast["im:image"][2].label}
        alt={`${podcast["im:name"].label} official poster`}
        className="podcast__image"
        width={170}
        height={170}
      />
      <div className="podcast__info info">
        <h2 className="info__name">{podcast["im:name"].label}</h2>
        <span className="info__artist">
          Author: {podcast["im:artist"].label}
        </span>
      </div>
    </PodcastStyled>
  );
};

export default Podcast;
