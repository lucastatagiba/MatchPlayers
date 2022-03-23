import axios from "axios";
export const Api = axios.create({
  baseURL: "https://matchplayersdb.herokuapp.com",
});

export const ApiNews = axios.create({
  baseURL: "https://newscatcher.p.rapidapi.com/v1",
});
