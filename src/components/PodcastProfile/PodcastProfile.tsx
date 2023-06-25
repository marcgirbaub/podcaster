import { Link } from "react-router-dom";
import { PodcastsState } from "../../store/features/podcasts/types";
import PodcastProfileStyled from "./PodcastProfileStyled";
import convertStringToLink from "../../utils/convertStringToLink";

interface PodcastProfileProps {
  podcast: PodcastsState;
}

const PodcastProfile = ({
  podcast: { artist, description, image, name, id },
}: PodcastProfileProps): JSX.Element => {
  const podcastDetailRoute = `../podcast/${id}`;

  const linkedDescription = convertStringToLink(description);

  return (
    <PodcastProfileStyled>
      <div className="profile__container">
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
          <Link to={podcastDetailRoute}>
            <h3 className="profile__name">{name}</h3>
          </Link>
          <span className="profile__artist">
            {" "}
            by <Link to={podcastDetailRoute}>{artist}</Link>
          </span>
        </div>
        <div className="profile__description-container">
          <h4 className="profile__description-title">Description:</h4>
          <p
            dangerouslySetInnerHTML={{ __html: linkedDescription }}
            className="profile__description"
          ></p>
        </div>
      </div>
    </PodcastProfileStyled>
  );
};

export default PodcastProfile;
