import GeralButton from "../GeneralButton";
import { Container } from "./style";
import { BsFillImageFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostListContext } from "../../providers/posts";
import { UserDataContext } from "../../providers/userData";

const ModalPub = ({ closeModal }) => {
  const { handlePost, userData, userToken } = useContext(PostListContext);
  const { setImgBase64Post } = useContext(UserDataContext);
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
              onChange={function (event) {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  setImgBase64Post(reader.result);
                });
                reader.readAsDataURL(event.target.files[0]);
              }}
            />
            {/* <video width={300} controls={true}>
              <source src={imgBase64Post} />
            </video> */}
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
