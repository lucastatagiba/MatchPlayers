import axios from "axios";
export const Api = axios.create({
  baseURL: "https://matchplayersdb.herokuapp.com",
});
