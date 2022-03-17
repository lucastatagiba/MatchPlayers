import GeralButton from "../GeneralButton";
import { Container } from "./style";
import UserImg from "../../Assets/img/Praia1_140220.jpg";
import { BsFillImageFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

const ModalPub = ({ closeModal }) => {
  return (
    <Container>
      <div className="headerModalPub">
        <h1> Criar Publicação </h1>
        <RiCloseCircleFill onClick={closeModal} />
      </div>
      <div className="ContainModalPub">
        <img src={UserImg} alt="UserImg" />
        <div className="rightSidePub">
          <textarea placeholder="No que você está pensando?" />
          <div className="buttonsModalPub">
            <GeralButton width="max-content" bgcolor="#f75f30">
              {<BsFillImageFill color="black" />} Foto
            </GeralButton>
            <GeralButton width="max-content" bgcolor={"#6C8394"}>
              Publicar
            </GeralButton>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ModalPub;
