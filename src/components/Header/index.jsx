import { TextField } from "@mui/material";
import { BsHouseFill } from "react-icons/bs";
import { AiFillMessage, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import { GrMoreVertical } from "react-icons/gr";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { toast } from "react-toastify";
import logoIMG from "../../Assets/img/logo.png";
import Input from "../Input";
import FileField from "../FileField";
import SelectGames from "../SelectGames";
import Button from "../GeneralButton";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";

const Header = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const [appearModal, setAppearModal] = useState({
    config: false,
    message: false,
    menu: false,
    photo: false,
  });
  const [photoProfile, setPhotoProfile] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")).profileIMG || ""
  );
  const user = JSON.parse(localStorage.getItem("@matchplayers-userData")).name;

  const handleModal = (icon) => {
    switch (icon) {
      case "config":
        setAppearModal({
          message: false,
          menu: false,
          photo: false,
          config: !appearModal.config,
        });
        return appearModal.config;
      case "message":
        setAppearModal({
          message: !appearModal.message,
          menu: false,
          photo: false,
          config: false,
        });
        return appearModal.message;

      case "menu":
        setAppearModal({
          message: false,
          menu: !appearModal.menu,
          photo: false,
          config: false,
        });
        return appearModal.menu;

      case "photo":
        setAppearModal({
          message: false,
          menu: false,
          photo: !appearModal.photo,
          config: false,
        });
        return appearModal.photo;

      default:
        break;
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    toast.success("Volte Sempre =)");
  };

  const onImageSubmit = (data) => {
    const formData = new FormData();

    axios.post("https://api.imgur.com/3/upload", data, {
      headers: {
        Authorization: "0f39bc04e159b9a",
      },
    });
  };

  return (
    <Container>
      <figure onClick={() => history.push("/feed")}>
        <img alt="logo" src={logoIMG} className="logoimg" />
        <div className="logoName">
          <h3>MatchPlayers</h3>
          <span>Social Media For Games</span>
        </div>
      </figure>

      <div className="modalMenu" display={appearModal.menu}>
        <div onClick={() => handleModal("menu")} className="close">
          <RiCloseCircleFill />
        </div>
        <div>Amigos</div>
        <div>Mensagens</div>
        <div onClick={() => handleModal("config")}>Configurações</div>
        <div onClick={handleLogout}>Sair</div>
      </div>
      <div className="modalConfig" display={appearModal.config}>
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
          />
        </form>

        <form onSubmit={handleSubmit(onImageSubmit)}>
          <h5>Alterar perfil:</h5>

          <FileField
            name={"perfil"}
            register={register}
            id="perfil"
            placeholder="Imagem de Perfil"
            type="file"
          />

          {/* <FileField
            name={"fundo"}
            register={register}
            id="fundo"
            placeholder="Imagem de Fundo"
            type="file"
          /> */}

          <Button
            bgcolor={"#002543"}
            children={"Salvar alteração"}
            width={150}
          />
        </form>

        <form>
          <h5>Editar senha:</h5>

          <TextField fullWidth label="Senha" variant="outlined" size="small" />

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
      <div className="modalPhoto" display={appearModal.photo}>
        <div onClick={() => handleModal("photo")} className="close">
          <RiCloseCircleFill />
        </div>
        <div
          onClick={() => history.push(`/profile/${user}`)}
          className="modalPhotoText"
        >
          Ir para o meu perfil
        </div>
        <div className="modalPhotoText" onClick={() => handleLogout()}>
          Sair
        </div>
      </div>

      <div>
        <Input Icon={AiOutlineSearch} width="250" placeholder="Pesquisar" />

        <GrMoreVertical className="menu" onClick={() => handleModal("menu")} />

        <BsHouseFill
          className="houseIcon"
          onClick={() => history.push("/feed")}
        />
        <AiFillMessage
          className="messageIcon"
          onClick={() => handleModal("message")}
        />
        <AiFillSetting
          className="configIcon"
          onClick={() => handleModal("config")}
        />
        <img
          src={photoProfile}
          alt="userPhoto"
          className="userimg"
          onClick={() => handleModal("photo")}
        />
      </div>
    </Container>
  );
};
export default Header;
