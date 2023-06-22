import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PodcastsState } from "./types";
import { PodcastStructure } from "../../../types/types";

export const initialPodcastsState: PodcastsState = {
  artist: "",
  name: "",
  description: "",
  image: "",
  id: "",
};

const podcastsSlice = createSlice({
  name: "podcasts",
  initialState: initialPodcastsState,
  reducers: {
    loadPodcast: (
      currentState,
      { payload }: PayloadAction<PodcastStructure>
    ): PodcastsState => ({
      ...currentState,
      artist: payload["im:artist"].label,
      description: payload.summary.label,
      image: payload["im:image"][2].label,
      name: payload["im:name"].label,
      id: payload.id.attributes["im:id"],
    }),
  },
});

export const podcastsReducer = podcastsSlice.reducer;
export const { loadPodcast: loadPodcastActionCreator } = podcastsSlice.actions;
