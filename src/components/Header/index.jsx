import { TextField } from "@mui/material";
import { BsHouseFill } from "react-icons/bs";
import { AiFillMessage, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import { GrMoreVertical } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RiCloseCircleFill } from "react-icons/ri";

import logoIMG from "../../Assets/img/logo.png";
import Input from "../Input";
import FileField from "../FileField";
import SelectGames from "../SelectGames";
import Button from "../GeneralButton";
import { Container } from "./style";
import { UserDataContext } from "../../providers/userData";
import ListFriendsModal from "../ListFriendsModal";

const Header = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

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
  const params = useParams();
  useEffect(() => {
    handleModal("input");
  }, [params]);

  return (
    <Container>
      <figure onClick={() => history.push("/feed")}>
        <img alt="logo" src={logoIMG} className="logoimg" />
        <div className="logoName">
          <h3>MatchPlayers</h3>
          <span>Social Media For Games</span>
        </div>
      </figure>
      <div className="modalMenu" display={appearModal.menu ? "flex" : "none"}>
        <div onClick={() => handleModal("menu")} className="close">
          <RiCloseCircleFill />
        </div>
        <div
          onClick={() => {
            history.push(`/profile/${user}`);
            setUserProfile(userData);
          }}
        >
          Perfil
        </div>
        <div onClick={() => handleModalFriends()}>Amigos</div>
        <div>Mensagens</div>
        <div onClick={() => handleModal("config")}>Configurações</div>
        <div
          onClick={() => {
            history.push(`/about`);
          }}
        >
          Sobre Nós
        </div>
        <div onClick={() => handleLogout(history)}>Sair</div>
      </div>

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
          <div
            className="modalConfig"
            display={appearModal.config ? "flex" : "none"}
          >
            <div onClick={() => handleModal("menu")} className="close">
              <RiCloseCircleFill />
            </div>

            <form>
              <h5>Adicionar jogos:</h5>

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
            </form>

            <form onSubmit={handleSubmit(handlechangeUserIMG)}>
              <h5>Alterar perfil:</h5>

              <FileField
                state={setImgBase64User}
                id="perfil"
                placeholder="Imagem de Perfil"
                type="file"
              />
              {isloading && (
                <img className="loading" alt="" src={loadingPhoto} />
              )}

              <Button
                bgcolor={"#002543"}
                children={"Salvar alteração"}
                width={150}
              />
            </form>

            <form>
              <h5>Editar senha:</h5>

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
            </form>
          </div>
        </div>
        <div className="profilePhoto">
          <img
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
            <div
              onClick={() => {
                setUserProfile(userData);
                history.push(`/profile/${user}`);
                handleModal("photo");
              }}
              className="modalPhotoText"
            >
              Ir para o meu perfil
            </div>
            <div
              className="modalPhotoText"
              onClick={() => {
                history.push("/about");
              }}
            >
              Sobre Nós
            </div>
            <div
              className="modalPhotoText2"
              onClick={() => {
                handleLogout(history);
                handleModal("photo");
              }}
            >
              Sair
            </div>
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
