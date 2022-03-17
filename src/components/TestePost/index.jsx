import { BiUpload } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { PostListContext } from "../../providers/posts";

const TestePost = () => {
  const { register, handleSubmit } = useForm();
  const { handlePost } = useContext(PostListContext);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-token")) || ""
  );

  const handleCreatePost = (data) => {
    const newPost = {
      nickname: userData.nickname,
      profileIMG: userData.profileIMG,
      plataformList: userData.plataformList,
      postIMG: data.postIMG || "",
      desc: data.desc,
      comments: [],
      userId: userData.id,
    };
    console.log(newPost);
    handlePost(newPost, token);
  };

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <input
        type="text"
        placeholder="No que você está pensando ?"
        {...register("desc")}
      />
      <input type="file" {...register("postIMG")} />
      <button type="Submit">Publicar</button>
    </form>
  );
};

export default TestePost;
