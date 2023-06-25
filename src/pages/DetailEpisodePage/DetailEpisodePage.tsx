import { useParams } from "react-router-dom";
import PodcastProfile from "../../components/PodcastProfile/PodcastProfile";
import { useAppDispatch, useAppSelector } from "../../store";
import useLoadPodcast from "../../hooks/useLoadPodcast/useLoadPodcast";
import { PodcastsState } from "../../store/features/podcasts/types";
import { useEffect } from "react";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import DetailEpisodePageStyled from "./DetailEpisodePageStyled";
import { PodcastEpisode } from "../../types/types";
import convertStringToLink from "../../utils/convertStringToLink";

const DetailEpisodePage = (): JSX.Element => {
  const podcast = useAppSelector((state) => state.podcasts);
  const dispatch = useAppDispatch();

  const { id, idEpisode } = useParams();

  const { data, isFetching, podcastDetail, isLoading } = useLoadPodcast(
    id as string
  );

  const currentEpisode: PodcastEpisode = data?.results.find(
    (episode) => episode.trackId.toString() === idEpisode
  ) as PodcastEpisode;

  const podcastToLoad: PodcastsState = {
    name: podcastDetail?.["im:name"].label ?? "",
    artist: podcastDetail?.["im:artist"].label ?? "",
    description: podcastDetail?.summary.label ?? "",
    image: podcastDetail?.["im:image"][2].label ?? "",
    id: podcastDetail?.id.attributes["im:id"] ?? "",
  };

  useEffect(() => {
    isFetching
      ? dispatch(setIsLoadingActionCreator())
      : dispatch(unsetIsLoadingActionCreator());
  }, [dispatch, isFetching]);

  if (isFetching || isLoading) {
    return <></>;
  }

  const modifiedDescription = convertStringToLink(currentEpisode.description);

  return (
    <DetailEpisodePageStyled>
      {podcast.id ? (
        <PodcastProfile podcast={podcast} />
      ) : (
        <PodcastProfile podcast={podcastToLoad} />
      )}
      <div className="episode-container">
        <div className="episode">
          <h3 className="episode__title">{currentEpisode?.trackName}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: modifiedDescription }}
            className="episode__description"
          ></p>
          <audio
            className="episode__audio"
            controls
            src={currentEpisode.episodeUrl}
          ></audio>
        </div>
      </div>
    </DetailEpisodePageStyled>
  );
};

export default DetailEpisodePage;
