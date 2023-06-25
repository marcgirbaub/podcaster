// src/mocks/handlers.js
import { rest } from "msw";
import {
  mockDetailPodcastResponse,
  mockPodcastsResponse,
} from "./mockPodcasts";
import { baseUrl } from "../api/apiEndpoints";
import getPodcastsUrl from "../api/getPodcastsUrl/getPodcastsUrl";

export const handlers = [
  rest.get(`${baseUrl}${getPodcastsUrl(2, 1310)}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPodcastsResponse));
  }),
  rest.get(`${baseUrl}${getPodcastsUrl(100, 1310)}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPodcastsResponse));
  }),

  rest.get(`https://itunes.apple.com/lookup`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDetailPodcastResponse));
  }),
];

export const errorHandlers = [
  rest.get(`${baseUrl}${getPodcastsUrl(2, 1310)}`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.get(`https://itunes.apple.com/lookup`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),
];
