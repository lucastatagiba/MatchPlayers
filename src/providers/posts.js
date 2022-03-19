import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services";

export const PostListContext = createContext([]);

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [UserpostList, setUserPostList] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );
  const [userToken] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-token")) || []
  );

  const handlePost = (data, token) => {
    Api.post(`/posts`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        const dataPost = {
          username: userData.nickname,
          userId: userData.id,
          profileIMG: userData.profileIMG,
          plataformList: userData.plataformList,
          desc: res.data.desc,
          comments: [],
          id: res.data.id,
          createdAt: res.data.createdAt,
        };
        const newPostUser = {
          userId: userData.id,
          posts: [...userData.posts, dataPost],
        };

        handlePostUser(newPostUser, userToken, userData.id);
      })
      .catch((res) => console.log(res));
  };

  useEffect(() => {
    Api.get("/posts").then((res) => {
      setPostList(res.data);
    });
  }, [userData]);

  useEffect(() => {
    setUserPostList(postList.filter((post) => post.userId === userData.id));
  }, [postList, userData.id]);

  const handlePostUser = (data, token, id) => {
    Api.patch(`/644/users/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        localStorage.setItem(
          "@matchplayers-userData",
          JSON.stringify(res.data)
        );
        setUserData(res.data);
        toast.success("Publicado");
      })
      .catch((res) => toast.error("Tente Novamente!"));
  };

  const handleDeletePost = (idPost) => {
    Api.delete(`/posts/${idPost}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then(() => {
        const newListPostUser = userData.posts.filter((item) => {
          return item.id !== idPost;
        });

        const newPosts = {
          userId: userData.id,
          posts: newListPostUser,
        };

        handleListPosts(newPosts);
      })
      .catch((err) => toast.error("Falha ao Remover Publicação."));
  };

  const handleListPosts = (data) => {
    Api.patch(`/644/users/${userData.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }).then((res) => {
      localStorage.setItem("@matchplayers-userData", JSON.stringify(res.data));
      setUserData(res.data);
      toast.success("Publicação Removida.");
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        userData,
        userToken,
        handlePost,
        handlePostUser,
        handleDeletePost,
        UserpostList,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
