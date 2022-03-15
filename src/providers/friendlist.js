import { createContext, useState } from "react";

export const FriendListContext = createContext([]);

export const FriendListProvider = ({ children }) => {
  const [friendList, setFriendList] = useState(
    JSON.parse(localStorage.getItem("friendList")) || []
  );

  return (
    <FriendListContext.Provider value={{ friendList }}>
      {children}
    </FriendListContext.Provider>
  );
};
