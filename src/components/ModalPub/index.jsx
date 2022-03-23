//EXTERNAL DEPENDENCIES
import GeralButton from "../GeneralButton";
import { BsFillImageFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { useContext } from "react";
import { useForm } from "react-hook-form";

//INTERNAL DEPENDENCIES
import { PostListContext } from "../../providers/posts";
import { UserDataContext } from "../../providers/userData";

//STYLES
import {
  Container,
  Text,
  Image,
  FormContainer,
  TextArea,
  Label,
  Input,
} from "./style";

const ModalPub = ({ closeModal }) => {
  const { handlePost, userData, userToken } = useContext(PostListContext);
  const { setImgBase64Post, imgBase64Post } = useContext(UserDataContext);
  const { register, handleSubmit } = useForm();

  const handlePostData = (data) => {
    const newPost = {
      username: userData.nickname,
      userId: userData.id,
      profileIMG: userData.profileIMG,
      plataformList: userData.plataformList,
      gameList: userData.gameList,
      desc: data.desc,
      comments: [],
      postIMG: imgBase64Post,
    };
    setImgBase64Post(false);
    handlePost(newPost, userToken);
    closeModal();
  };

  return (
    <Container className="modal">
      <Container className="modal__header">
        <Text className="header__text"> Criar Publicação </Text>
        <RiCloseCircleFill onClick={closeModal} />
      </Container>
      <Container className="modal__content">
        <Image
          className="content__userphoto"
          src={userData.profileIMG}
          alt="UserImg"
        />
        <FormContainer
          className="rightSidePub"
          onSubmit={handleSubmit(handlePostData)}
        >
          <TextArea
            placeholder="No que você está pensando?"
            {...register("desc")}
          />
          {imgBase64Post && (
            <Image
              className="content__imagepreview"
              src={imgBase64Post}
              alt="Thumbnail"
            />
          )}
          <Container className="modal__footer">
            <Label htmlFor="selector-file">
              <BsFillImageFill color="black" /> Foto
            </Label>
            <Input
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
            <GeralButton width="max-content" bgcolor={"#6C8394"} type="Submit">
              Publicar
            </GeralButton>
          </Container>
        </FormContainer>
      </Container>
    </Container>
  );
};
export default ModalPub;
