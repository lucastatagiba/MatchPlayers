import { createContext, useState } from "react";

export const PostListContext = createContext([]);

export const FriendListProvider = ({ children }) => {
  const [postList, setPostList] = useState(
    JSON.parse(localStorage.getItem("postList")) || []
  );

  return (
    <PostListContext.Provider value={{ postList }}>
      {children}
    </PostListContext.Provider>
  );
};
