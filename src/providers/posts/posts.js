import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api, ApiNews } from "../../services";

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
  const [commentsList, setCommentsList] = useState([]);

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
    Api.get("/posts").then((res) => setPostList(res.data));
    Api.get("/comments").then((res) => setCommentsList(res.data));
  }, [userData]);

  useEffect(() => {
    handleGetNews();
    handleGetComments();
  }, []);

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

  const handleDeletePost = (idPost, arrComments) => {
    arrComments.forEach((item) => {
      Api.delete(`/comments/${item.id}`)
        .then(() => console.log("Comentário Excluído"))
        .catch((err) => console.log(err));
    });

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
        setUserPostList(newListPostUser);
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

  const handleGetNews = () => {
    ApiNews.get("/search_free?q=games&lang=pt&media=true&page_size=10", {
      headers: {
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        "x-rapidapi-key": "5debe1370bmsh16d2555477e95fep143602jsn7206065dd7e6",
      },
    })
      .then((res) => {
        return setListNews(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  const handleGetComments = () => {
    Api.get("/comments")
      .then((res) => setCommentsList(res.data))
      .catch((err) => console.log(err));
  };

  const handleNewPostComment = (data) => {
    Api.post("/comments", data)
      .then(() => handleGetComments())
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
        handleGetNews,
        listNews,
        handleGetComments,
        handleNewPostComment,
        commentsList,
        setCommentsList,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
