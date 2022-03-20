import axios from "axios";
export const Api = axios.create({
  baseURL: "https://matchplayersdb.herokuapp.com",
});

export const ApiNews = axios.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com",
});
