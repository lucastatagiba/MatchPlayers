import { Container } from "./style";
import logoIMG from "../../Assets/img/logo.png";
import BigLogoIMG from "../../Assets/img/image.png";
import { BsHouseFill } from "react-icons/bs";
import { AiFillMessage, AiFillSetting } from "react-icons/ai";
import userIMG from "../../Assets/img/Praia1_140220.jpg";
import { GrMoreVertical } from "react-icons/gr";

const Header = () => {
  return (
    <Container>
      <img alt="logo" src={BigLogoIMG} className="bigLogo" />
      <img alt="logo" src={logoIMG} className="logoimg" />

      <div>
        <input />
        <GrMoreVertical className="menu" />
        <BsHouseFill className="houseIcon" />
        <AiFillMessage className="messageIcon" />
        <AiFillSetting className="configIcon" />
        <img src={userIMG} alt="userPhoto" className="userimg" />
      </div>
    </Container>
  );
};
export default Header;
