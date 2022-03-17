import { createContext, useState } from "react";
import { Api } from "../services";

export const PostListContext = createContext([]);

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState(
    JSON.parse(localStorage.getItem("postList")) || []
  );

  const handlePost = (data, token) => {
    Api.post("/644/posts", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <PostListContext.Provider value={{ postList, handlePost }}>
      {children}
    </PostListContext.Provider>
  );
};
