import { Skeleton } from "@mui/material";
import SkeletonPodcastStyled from "./SkeletonPodcastStyled";

const SkeletonPodcast = (): JSX.Element => {
  return (
    <SkeletonPodcastStyled className="skeleton">
      <Skeleton
        variant="circular"
        width={170}
        height={170}
        className="skeleton__image"
      />
      <Skeleton variant="text" className="skeleton__text" />
      <Skeleton
        variant="text"
        className="skeleton__text skeleton__text--artist"
      />
    </SkeletonPodcastStyled>
  );
};

export default SkeletonPodcast;
