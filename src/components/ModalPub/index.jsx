import GeralButton from "../GeneralButton";
import { Container } from "./style";
import { BsFillImageFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { PostListContext } from "../../providers/posts";

const ModalPub = ({ closeModal }) => {
  const { handlePost, handlePostUser, userData, userToken } =
    useContext(PostListContext);

  const { register, handleSubmit } = useForm();

  const handlePostData = (data) => {
    const newPost = {
      username: userData.nickname,
      userId: userData.id,
      profileIMG: userData.profileIMG,
      plataformList: userData.plataformList,
      desc: data.desc,
      comments: [],
    };
    handlePost(newPost, userToken);
    closeModal();
    // handlePostUser(newPostUser, userToken, userData.id);
  };

  return (
    <Container>
      <div className="headerModalPub">
        <h1> Criar Publicação </h1>
        <RiCloseCircleFill onClick={closeModal} />
      </div>
      <div className="ContainModalPub">
        <img src={userData.profileIMG} alt="UserImg" />
        <form className="rightSidePub" onSubmit={handleSubmit(handlePostData)}>
          <textarea
            placeholder="No que você está pensando?"
            {...register("desc")}
          />
          <div className="buttonsModalPub">
            <label for="selector-file">
              <BsFillImageFill color="black" /> Foto
            </label>
            <input
              id="selector-file"
              type="file"
              placeholder="Arquivo Selecionado"
              {...register("postIMG")}
            />
            <GeralButton width="max-content" bgcolor={"#6C8394"} type="Submit">
              Publicar
            </GeralButton>
          </div>
        </form>
      </div>
    </Container>
  );
};
export default ModalPub;
