import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api, ApiNews } from "../services";

export const PostListContext = createContext([]);

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [postListFriends, setPostListFriends] = useState(postList);
  const [UserpostList, setUserPostList] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-token")) || []
  );
  const [listNews, setListNews] = useState([]);

  const handlePost = (data, token) => {
    Api.post(`/posts`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
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

  const handleCommentPost = (data, idPost) => {
    Api.patch(`/posts/${idPost}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }).then((res) => {
      const newListPost = userData.posts.filter((posts) => {
        return posts.id !== res.data.id;
      });

      const newUserData = {
        email: userData.email,
        friendList: userData.friendList,
        gameList: userData.gameList,
        id: userData.id,
        name: userData.name,
        nickname: userData.nickname,
        plataformList: userData.plataformList,
        posts: [...newListPost, res.data],
        profileBackgroundIMG: userData.profileBackgroundIMG,
        profileIMG: userData.profileIMG,
        timeAvailability: userData.timeAvailability,
        userId: userData.userId,
      };
      console.log([...newListPost, res.data]);
      localStorage.setItem(
        "@matchplayers-userData",
        JSON.stringify(newUserData)
      );
      setUserData(newUserData);
      toast.success("Comentário Enviado");
    });
  };

  const handleGetNews = () => {
    ApiNews.get("/news/search?q=games", {
      headers: {
        "x-bingapis-sdk": true,
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "5debe1370bmsh16d2555477e95fep143602jsn7206065dd7e6",
      },
    })
      .then((res) => {
        console.log(res.data.value);
        return setListNews(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        setPostList,
        postListFriends,
        setPostListFriends,
        userData,
        userToken,
        handlePost,
        handlePostUser,
        handleDeletePost,
        UserpostList,
        setUserPostList,
        setUserData,
        setUserToken,
        handleCommentPost,
        handleGetNews,
        listNews,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
