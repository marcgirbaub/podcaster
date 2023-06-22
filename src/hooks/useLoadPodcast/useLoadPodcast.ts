import { useAppDispatch } from "../../store";
import { loadPodcastActionCreator } from "../../store/features/podcasts/podcastsSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { PodcastStructure } from "../../types/types";

const useLoadPodcast = () => {
  const dispatch = useAppDispatch();

  const loadPodcast = (podcast: PodcastStructure) => {
    dispatch(setIsLoadingActionCreator());

    dispatch(loadPodcastActionCreator(podcast));

    dispatch(unsetIsLoadingActionCreator());
  };

  return { loadPodcast };
};

export default useLoadPodcast;
