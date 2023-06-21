import getPodcastsUrl from "./getPodcastsUrl";

describe("Given a getPodcastsUrl function", () => {
  describe("When called with the params of limit 100 and genre 1310", () => {
    test("Then it should return an url equal to `us/rss/toppodcasts/limit=100/genre=1310/json`", () => {
      const limit = 100;
      const genre = 1310;

      const expectedUrl = "us/rss/toppodcasts/limit=100/genre=1310/json";

      const url = getPodcastsUrl(limit, genre);

      expect(url).toEqual(expectedUrl);
    });
  });
});
