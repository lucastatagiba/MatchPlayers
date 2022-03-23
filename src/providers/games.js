import { createContext, useEffect, useState } from "react";
import { Api } from "../services";

export const GamesContext = createContext([]);

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    Api.get("/games").then((res) => {
      setGames(res.data);
    });
  }, []);

  return (
    <GamesContext.Provider value={{ games }}>{children}</GamesContext.Provider>
  );
};
