//EXTERNAL DEPENDENCIES
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import { AiFillMessage, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import { GrMoreVertical } from "react-icons/gr";
import { BsHouseFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

//INTERNAL DEPENDENCIES
import { UserDataContext } from "../../providers/user/userData";
import logoIMG from "../../assets/img/logo.png";
import Input from "../Input";
import FileField from "../FileField";
import SelectGames from "../SelectGames";
import Button from "../GeneralButton";
import ListFriendsModal from "../ListFriendsModal";

//STYLES
import {
  Container,
  InnerContainer,
  Figure,
  LogoImg,
  TitleH3,
  LogoName,
  Span,
  DivsMenu,
  TitleH5,
  Form,
  ModalMenu,
  CloseMenu,
  ModalConfig,
  ImageLoading,
  UserImage,
} from "./style";

const Header = () => {
  const history = useHistory();

  const params = useParams();

  const { handleSubmit } = useForm();

  const [photoProfile] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")).profileIMG || ""
  );
  const user = JSON.parse(localStorage.getItem("@matchplayers-userData")).name;
  const {
    handleLogout,
    setImgBase64User,
    handlechangeUserIMG,
    loadingPhoto,
    appearModal,
    setAppearModal,
    handleGamesRegister,
    isloading,
    userData,
    setUserProfile,
    listUsers,
    setSearchUser,
    setInputvalue,
  } = useContext(UserDataContext);
  const [listFriends, setListFriends] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")).friendList || []
  );
  const [modalFriends, setModalFriends] = useState(false);

  const handleModal = (icon) => {
    switch (icon) {
      case "config":
        setAppearModal({
          message: false,
          menu: false,
          photo: false,
          config: !appearModal.config,
          input: false,
        });
        return appearModal.config;
      case "message":
        setAppearModal({
          message: !appearModal.message,
          menu: false,
          photo: false,
          config: false,
          input: false,
        });
        return appearModal.message;

      case "menu":
        setAppearModal({
          message: false,
          menu: !appearModal.menu,
          photo: false,
          config: false,
          input: false,
        });
        return appearModal.menu;

      case "photo":
        setAppearModal({
          message: false,
          menu: false,
          photo: !appearModal.photo,
          config: false,
          input: false,
        });
        return appearModal.photo;

      case "input":
        setAppearModal({
          message: false,
          menu: false,
          input: false,
          config: false,
          photo: false,
        });
        return appearModal.input;

      default:
        break;
    }
  };

  const handleModalFriends = () => {
    setListFriends(
      JSON.parse(localStorage.getItem("@matchplayers-userData")).friendList
    );
    setModalFriends(!modalFriends);
    handleModal("menu");
  };

  const getValueSearch = (event) => {
    const valueSearch = event.target.value.toLowerCase();
    setInputvalue(valueSearch);
    const newListUsers = listUsers.filter((usuario) => {
      return usuario.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(valueSearch.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    });
    handleModal("input");
    if (valueSearch.length > 0) {
      setAppearModal({
        message: false,
        menu: false,
        input: true,
        config: false,
        photo: false,
      });
    } else {
      setAppearModal({
        message: false,
        menu: false,
        input: false,
        config: false,
        photo: false,
      });
    }
    setSearchUser(newListUsers);
  };

  useEffect(() => {
    handleModal("input");
  }, [params]);

  return (
    <Container>
      <Figure onClick={() => history.push("/feed")}>
        <LogoImg alt="logo" src={logoIMG} className="logoimg" />
        <LogoName className="logoName">
          <TitleH3>MatchPlayers</TitleH3>
          <Span>Social Media For Games</Span>
        </LogoName>
      </Figure>

      <ModalMenu
        className="modalMenu"
        display={appearModal.menu ? "flex" : "none"}
      >
        <CloseMenu onClick={() => handleModal("menu")} className="close">
          <RiCloseCircleFill />
        </CloseMenu>
        <DivsMenu
          onClick={() => {
            history.push(`/profile/${user}`);
            setUserProfile(userData);
          }}
        >
          Perfil
        </DivsMenu>
        <DivsMenu onClick={() => handleModalFriends()}>Amigos</DivsMenu>
        <DivsMenu>Mensagens</DivsMenu>
        <DivsMenu onClick={() => handleModal("config")}>Configurações</DivsMenu>
        <DivsMenu
          onClick={() => {
            history.push(`/about`);
          }}
        >
          Sobre Nós
        </DivsMenu>
        <DivsMenu onClick={() => handleLogout(history)}>Sair</DivsMenu>
      </ModalMenu>

      <div>
        <Input
          Icon={AiOutlineSearch}
          width="250"
          placeholder="Pesquisar"
          onChange={(event) => getValueSearch(event)}
          display={appearModal.input ? "flex" : "none"}
        />

        <GrMoreVertical className="menu" onClick={() => handleModal("menu")} />
        <BsHouseFill
          className="houseIcon"
          onClick={() => history.push("/feed")}
        />

        <AiFillMessage
          className="messageIcon"
          onClick={() => handleModal("message")}
        />

        <div className="configDiv">
          <AiFillSetting
            className="configIcon"
            onClick={() => handleModal("config")}
          />
          <ModalConfig
            className="modalConfig"
            display={appearModal.config ? "flex" : "none"}
          >
            <div onClick={() => handleModal("menu")} className="close">
              <RiCloseCircleFill />
            </div>

            <Form>
              <TitleH5>Adicionar jogos:</TitleH5>

              <SelectGames />
              <Button
                bgcolor={"#002543"}
                children={"Salvar alteração"}
                width={150}
                onClick={(event) => {
                  event.preventDefault();
                  handleGamesRegister();
                }}
              />
            </Form>

            <Form onSubmit={handleSubmit(handlechangeUserIMG)}>
              <TitleH5>Alterar perfil:</TitleH5>

              <FileField
                state={setImgBase64User}
                id="perfil"
                placeholder="Imagem de Perfil"
                type="file"
              />
              {isloading && (
                <ImageLoading className="loading" alt="" src={loadingPhoto} />
              )}

              <Button
                bgcolor={"#002543"}
                children={"Salvar alteração"}
                width={150}
              />
            </Form>

            <Form>
              <TitleH5>Editar senha:</TitleH5>

              <TextField
                fullWidth
                label="Senha"
                variant="outlined"
                size="small"
              />

              <TextField
                fullWidth
                label="Confirmar Senha"
                variant="outlined"
                size="small"
              />

              <Button
                bgcolor={"#002543"}
                children={"Salvar alteração"}
                width={150}
              />
            </Form>
          </ModalConfig>
        </div>

        <div className="profilePhoto">
          <UserImage
            src={
              userData.profileIMG === "" ? photoProfile : userData.profileIMG
            }
            alt="userPhoto"
            className="userimg"
            onClick={() => handleModal("photo")}
          />
          <div
            className="modalPhoto"
            display={appearModal.photo ? "inline" : "none"}
          >
            <div onClick={() => handleModal("photo")} className="close">
              <RiCloseCircleFill />
            </div>

            <DivsMenu
              onClick={() => {
                setUserProfile(userData);
                history.push(`/profile/${user}`);
                handleModal("photo");
              }}
              className="modalPhotoText"
            >
              Ir para o meu perfil
            </DivsMenu>

            <DivsMenu
              className="modalPhotoText2"
              onClick={() => history.push("/about")}
            >
              Sobre nós
            </DivsMenu>

            <DivsMenu
              className="modalPhotoText2"
              onClick={() => {
                handleLogout(history);
                handleModal("photo");
              }}
            >
              Sair
            </DivsMenu>
          </div>
        </div>
      </div>

      {modalFriends && (
        <ListFriendsModal
          listFriends={listFriends}
          modalClose={setModalFriends}
        />
      )}
    </Container>
  );
};

export default Header;
