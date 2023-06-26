import SkeletonPodcast from "../SkeletonPodcast/SkeletonPodcast";
import SkeletonPodcastListStyled from "./SkeletonPodcastListStyled";

const SkeletonPodcastList = (): JSX.Element => {
  return (
    <SkeletonPodcastListStyled>
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
      <SkeletonPodcast />
    </SkeletonPodcastListStyled>
  );
};

export default SkeletonPodcastList;
