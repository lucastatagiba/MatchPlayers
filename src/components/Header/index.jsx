import { TextField } from "@mui/material";
import { Container } from "./style";
import logoIMG from "../../Assets/img/logo.png";
import BigLogoIMG from "../../Assets/img/image.png";
import { BsHouseFill } from "react-icons/bs";
import { AiFillMessage, AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import userIMG from "../../Assets/img/Praia1_140220.jpg";
import { GrMoreVertical } from "react-icons/gr";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import Button from "../GeneralButton";
import { RiUpload2Fill } from "react-icons/ri";

const Header = () => {
  const [appearModal, setAppearModal] = useState({
    config: false,
    message: false,
    menu: false,
    photo: false,
  });

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
  const history = useHistory();
  return (
    <Container>
      <img
        alt="logo"
        src={BigLogoIMG}
        className="bigLogo"
        onClick={() => history.push("/feed")}
      />
      <img
        alt="logo"
        src={logoIMG}
        className="logoimg"
        onClick={() => history.push("/feed")}
      />

      <div className="modalMenu" appear={appearModal.menu}>
        <div onClick={() => history.push("/")}>Início</div>
        <div>Amigos</div>
        <div>Mensagens</div>
        <div onClick={() => handleModal("config")}>Configurações</div>
        <div>Sair</div>
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
          src={userIMG}
          alt="userPhoto"
          className="userimg"
          onClick={() => handleModal("photo")}
        />
      </div>
    </Container>
  );
};
export default Header;
