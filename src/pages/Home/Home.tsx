import { useEffect, useState } from "react";
import { genre, limit } from "../../api/apiEndpoints";
import PodcastList from "../../components/PodcastList/PodcastList";
import useGetPodcasts from "../../hooks/useGetPodcasts/useGetPodcasts";
import { PodcastListStructure } from "../../types/types";
import HomeStyled from "./HomeStyled";
import { useAppDispatch } from "../../store";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";

const Home = (): JSX.Element => {
  const { data, error, isError, isLoading } = useGetPodcasts(limit, genre);
  const dispatch = useAppDispatch();

  const [numberOfPodcasts, setNumberOfPodcasts] = useState(0);
  const [filter, setFilter] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] =
    useState<PodcastListStructure>([]);

  useEffect(() => {
    if (filter) {
      setNumberOfPodcasts(filteredPodcasts.length);
      return;
    }

    if (data) {
      setNumberOfPodcasts(data.feed.entry.length);
    }
  }, [data, filter, filteredPodcasts.length]);

  useEffect(() => {
    isLoading
      ? dispatch(setIsLoadingActionCreator())
      : dispatch(unsetIsLoadingActionCreator());
  }, [dispatch, isLoading]);

  if (isError) {
    console.log(error);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilter(value);

    const filteredPodcasts: PodcastListStructure = [];

    data?.feed.entry.map((podcast) => {
      if (
        podcast["im:name"].label.toLowerCase().includes(value.toLowerCase()) ||
        podcast["im:artist"].label.toLowerCase().includes(value.toLowerCase())
      ) {
        filteredPodcasts.push(podcast);
      }

      setFilteredPodcasts(filteredPodcasts);
    });
  };

  return (
    <HomeStyled>
      <div className="info">
        {data && (
          <span className="info__podcasts-number">{numberOfPodcasts}</span>
        )}
        <input
          className="info__filter"
          type="text"
          name="filter"
          placeholder="Filter podcasts..."
          onChange={handleInputChange}
        ></input>
      </div>
      {filter && <PodcastList podcasts={filteredPodcasts} />}
      {data && !filter && <PodcastList podcasts={data.feed.entry} />}
    </HomeStyled>
  );
};

export default Home;
