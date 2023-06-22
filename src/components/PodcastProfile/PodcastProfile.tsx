import { Link } from "react-router-dom";
import { PodcastsState } from "../../store/features/podcasts/types";
import PodcastProfileStyled from "./PodcastProfileStyled";

interface PodcastProfileProps {
  podcast: PodcastsState;
}

const PodcastProfile = ({
  podcast: { artist, description, image, name, id },
}: PodcastProfileProps): JSX.Element => {
  const podcastDetailRoute = `../podcast/${id}`;

  return (
    <PodcastProfileStyled className="profile">
      <div className="profile__image-container">
        <Link to={podcastDetailRoute}>
          <img
            src={image}
            alt={`${name} official poster`}
            className="profile__image"
            width={170}
            height={170}
          />
        </Link>
      </div>
      <div className="profile__info-container">
        <h3 className="profile__name">
          <Link to={podcastDetailRoute}>{name}</Link>
        </h3>
        <span className="profile__artist">
          by <Link to={podcastDetailRoute}>{artist}</Link>
        </span>
      </div>
      <div className="profile__description-container">
        <h4 className="profile__description-title">Description:</h4>
        <p className="profile__description">{description}</p>
      </div>
    </PodcastProfileStyled>
  );
};

export default PodcastProfile;
