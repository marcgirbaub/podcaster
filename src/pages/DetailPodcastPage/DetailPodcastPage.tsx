import { useEffect } from "react";
import moment from "moment";
import PodcastProfile from "../../components/PodcastProfile/PodcastProfile";
import useLoadPodcast from "../../hooks/useLoadPodcast/useLoadPodcast";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { PodcastInfo } from "../../types/types";
import DetailPodcastPageStyled from "./DetailPodcastPageStyled";
import transformMsToDuration from "../../utils/transformMsToDuration";
import { Link, useParams } from "react-router-dom";
import { PodcastsState } from "../../store/features/podcasts/types";

const DetailPodcastPage = (): JSX.Element => {
  const podcast = useAppSelector((state) => state.podcasts);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { data, isFetching, podcastDetail, isError, error } = useLoadPodcast(
    id!
  );

  if (isError) {
    console.log(error);
  }

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

  const listOfEpisodes = data?.results.filter(
    (episode) => !Object.hasOwn(episode, "currency")
  );

  const episodeEndpoint = `/podcast/${id}/episode/`;

  if (isFetching) return <></>;

  return (
    <DetailPodcastPageStyled>
      {podcast.id ? (
        <PodcastProfile podcast={podcast} />
      ) : (
        <PodcastProfile podcast={podcastToLoad} />
      )}
      <div className="episodes">
        <h2 className="episodes__number">
          Episodes: {(data?.results[0] as PodcastInfo).trackCount}
        </h2>
        <div className="episodes__list-container list">
          <div className="list__titles titles">
            <h4 className="titles__title">Title</h4>
            <h4 className="titles__date">Date</h4>
            <h4 className="titles__duration">Duration</h4>
          </div>
          <ul className="list__episodes">
            {listOfEpisodes?.map((episode, position) => {
              if (position % 2 != 0) {
                return (
                  <li
                    key={`${episode.releaseDate}-${episode.trackTimeMillis}`}
                    className="episode"
                  >
                    <Link
                      to={`${episodeEndpoint}${episode.trackId}`}
                      className="episode__name"
                    >
                      <span>{episode.trackName}</span>
                    </Link>
                    <span className="episode__date">
                      {moment(episode.releaseDate).utc().format("DD-MM-YYYY")}
                    </span>
                    <span className="episode__duration">
                      {Object.hasOwn(episode, "trackTimeMillis")
                        ? transformMsToDuration(episode.trackTimeMillis)
                        : "n/a"}
                    </span>
                  </li>
                );
              } else {
                return (
                  <li
                    key={episode.releaseDate}
                    className="episode episode--odd"
                  >
                    <Link
                      to={`${episodeEndpoint}${episode.trackId}`}
                      className="episode__name"
                    >
                      <span>{episode.trackName}</span>
                    </Link>
                    <span className="episode__date">
                      {moment(episode.releaseDate).utc().format("DD-MM-YYYY")}
                    </span>
                    <span className="episode__duration">
                      {Object.hasOwn(episode, "trackTimeMillis")
                        ? transformMsToDuration(episode.trackTimeMillis)
                        : "n/a"}
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </DetailPodcastPageStyled>
  );
};

export default DetailPodcastPage;
