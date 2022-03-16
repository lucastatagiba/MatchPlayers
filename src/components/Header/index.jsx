import { TextField } from "@mui/material";
import { BsHouseFill } from "react-icons/bs";
import { AiFillMessage, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import { GrMoreVertical } from "react-icons/gr";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiUpload2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

import logoIMG from "../../Assets/img/logo.png";
import Input from "../Input";
import Button from "../GeneralButton";
import { Container } from "./style";

const Header = () => {
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
  return (
    <Container>
      <figure>
        <img
          alt="logo"
          src={logoIMG}
          className="logoimg"
          onClick={() => history.push("/feed")}
        />
        <div className="logoName">
          <h3>MatchPlayers</h3>
          <span>Social Media For Games</span>
        </div>
      </figure>

      <div className="modalMenu" appear={appearModal.menu}>
        <div onClick={() => history.push("/feed")}>Início</div>
        <div>Amigos</div>
        <div>Mensagens</div>
        <div onClick={() => handleModal("config")}>Configurações</div>
        <div onClick={handleLogout}>Sair</div>
      </div>
      <div className="modalConfig" appear={appearModal.config}>
        <h5>Editar senha:</h5>
        <TextField
          fullWidth
          label="Senha"
          variant="outlined"
          size="small"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirmar Senha"
          variant="outlined"
          size="small"
          margin="normal"
        />
        <h5>
          Imagem de perfil <RiUpload2Fill className="upload" />
        </h5>
        <Button
          bgcolor={"#002543"}
          children={"Confirmar alterações"}
          width={150}
        />
      </div>
      <div className="modalPhoto" appear={appearModal.photo}>
        Modal foto
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
