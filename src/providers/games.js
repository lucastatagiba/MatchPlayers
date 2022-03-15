import { createContext, useState } from "react";

export const GameListContext = createContext([]);

export const GameListProvider = ({ children }) => {
  const [gameList, setGameList] = useState(
    JSON.parse(localStorage.getItem("gameList")) || []
  );

  return (
    <GameListContext.Provider value={{ gameList }}>
      {children}
    </GameListContext.Provider>
  );
};
