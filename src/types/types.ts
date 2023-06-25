/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Image {
  label: string;
  attributes: { height: string };
}

export interface PodcastStructure {
  "im:name": { label: string };
  "im:image": Image[];
  summary: { label: string };
  "im:price": {
    label: string;
    attributes: { amount: string; currency: string };
  };
  "im:contentType": { attributes: { term: string; label: string } };
  rights: { label: string };
  title: { label: string };
  link: { attributes: { rel: string; type: string; href: string } };
  id: { label: string; attributes: { "im:id": string } };
  "im:artist": { label: string; attributes?: { href: string } };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": { label: string; attributes: { label: string } };
}

export type PodcastListStructure = PodcastStructure[];
export interface Link {
  attributes: { rel: string; type?: string; href: string };
}

export interface TopPodcastsResponse {
  feed: {
    author: { name: { label: string }; uri: { label: string } };
    entry: PodcastStructure[];
    updated: { label: string };
    rights: { label: string };
    title: { label: string };
    icon: { label: string };
    link: Link[];
    id: { label: string };
  };
}

export interface PodcastEpisode {
  artworkUrl60: string;
  trackViewUrl: string;
  contentAdvisoryRating: string;
  feedUrl: string;
  episodeUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  artworkUrl600: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  genres: { name: string; id: string }[];
  episodeGuid: string;
  description: string;
  releaseDate: string;
  previewUrl: string;
  trackId: number;
  trackName: string;
  shortDescription: string;
  artistIds: any[];
  country: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  kind: string;
  wrapperType: string;
}

export interface PodcastInfo {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export interface PodcastEpisodesApiResponse {
  resultCount: number;
  results: (PodcastInfo | PodcastEpisode)[];
}
