interface Endpoints {
  detail: string;
  episodeDetail: string;
}

const endpoints: Endpoints = {
  detail: "podcast/:id",
  episodeDetail: "podcast/:id/episode/:idEpisode",
};

export default endpoints;
