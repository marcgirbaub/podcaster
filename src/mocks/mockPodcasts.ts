import { PodcastStructure, TopPodcastsResponse } from "../types/types";

export const joeBuddenPodcast: PodcastStructure = {
  "im:name": {
    label: "The Joe Budden Podcast",
  },
  "im:image": [
    {
      label:
        "https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  summary: {
    label:
      "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
  },
  "im:price": {
    label: "Get",
    attributes: {
      amount: "0",
      currency: "USD",
    },
  },
  "im:contentType": {
    attributes: {
      term: "Podcast",
      label: "Podcast",
    },
  },
  rights: {
    label: "© All rights reserved",
  },
  title: {
    label: "The Joe Budden Podcast - The Joe Budden Network",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
    },
  },
  id: {
    label:
      "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
    attributes: {
      "im:id": "1535809341",
    },
  },
  "im:artist": {
    label: "The Joe Budden Network",
    attributes: {
      href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2",
    },
  },
  category: {
    attributes: {
      "im:id": "1310",
      term: "Music",
      scheme: "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
      label: "Music",
    },
  },
  "im:releaseDate": {
    label: "2023-06-21T00:30:00-07:00",
    attributes: {
      label: "June 21, 2023",
    },
  },
};

export const fridayNightPodcast: PodcastStructure = {
  "im:name": {
    label: "Friday Night Karaoke",
  },
  "im:image": [
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  summary: {
    label:
      "No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!",
  },
  "im:price": {
    label: "Get",
    attributes: {
      amount: "0",
      currency: "USD",
    },
  },
  "im:contentType": {
    attributes: {
      term: "Podcast",
      label: "Podcast",
    },
  },
  rights: {
    label: "© Copyright Friday Night Karaoke",
  },
  title: {
    label: "Friday Night Karaoke - Friday Night Karaoke",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2",
    },
  },
  id: {
    label:
      "https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2",
    attributes: {
      "im:id": "1574029840",
    },
  },
  "im:artist": {
    label: "Friday Night Karaoke",
  },
  category: {
    attributes: {
      "im:id": "1310",
      term: "Music",
      scheme: "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
      label: "Music",
    },
  },
  "im:releaseDate": {
    label: "2023-05-16T01:44:00-07:00",
    attributes: {
      label: "May 16, 2023",
    },
  },
};

export const mockPodcastsResponse: TopPodcastsResponse = {
  feed: {
    author: {
      name: {
        label: "iTunes Store",
      },
      uri: {
        label: "http://www.apple.com/itunes/",
      },
    },
    entry: [joeBuddenPodcast, fridayNightPodcast],
    updated: {
      label: "2023-06-21T05:00:21-07:00",
    },
    rights: {
      label: "Copyright 2008 Apple Inc.",
    },
    title: {
      label: "iTunes Store: Top Podcasts in Music",
    },
    icon: {
      label: "http://itunes.apple.com/favicon.ico",
    },
    link: [
      {
        attributes: {
          rel: "alternate",
          type: "text/html",
          href: "https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3",
        },
      },
      {
        attributes: {
          rel: "self",
          href: "https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=2/genre=1310/json",
        },
      },
    ],
    id: {
      label:
        "https://mzstoreservices-int.itunes.apple.com/us/rss/toppodcasts/limit=2/genre=1310/json",
    },
  },
};
