import axios from "axios";

export const api = axios.create({
  baseURL: 'https://netease.sxuan.net/',
  timeout: 10000,
  transformResponse: [function (data) {
    return JSON.parse(data).data;
  }],
})