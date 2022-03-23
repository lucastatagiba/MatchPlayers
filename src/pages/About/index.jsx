//EXTERNAL DEPENDENCIES
import { useState } from "react";
import { useHistory } from "react-router-dom";

//INTERNAL DEPENDENCIES
import logoIMG from "../../assets/img/logo.png";
import imgAndre from "../../assets/img/Andre.jpeg";
import imgLeonardo from "../../assets/img/Leonardo.jpeg";
import imgLucas from "../../assets/img/Lucas.jpeg";
import imgRodrigo from "../../assets/img/Rodrigo.jpeg";
import imgPaulo from "../../assets/img/Paulo.jpeg";
import CardDev from "../../components/CardDev";
import GeneralButton from "../../components/GeneralButton";

//STYLES
import {
  Container,
  LogoContainer,
  Image,
  Caption,
  Text,
  DevelopersList,
} from "./style";

const About = () => {
  const history = useHistory();

  const [dataDev] = useState([
    {
      name: "Leonardo Moraes",
      role: "Product Owner",
      image: imgLeonardo,
      linkedin: "https://www.linkedin.com/in/leonardo-moraes-4b754517b/",
    },
    {
      name: "Paulo Lima",
      role: "Scrum Master",
      image: imgPaulo,
      linkedin:
        "https://www.linkedin.com/in/paulo-henrique-rodrigues-de-lima-2a122a1ba/",
    },
    {
      name: "Lucas Tatagiba",
      role: "Tech Leader",
      image: imgLucas,
      linkedin: "https://www.linkedin.com/in/lucas-tatagiba-de-oliveira/",
    },
    {
      name: "André Machado",
      role: "Quality Analist",
      image: imgAndre,
      linkedin: "https://www.linkedin.com/in/andre-machado-6135a4179/",
    },
    {
      name: "Rodrigo Firmo",
      role: "Quality Analist",
      image: imgRodrigo,
      linkedin: "https://www.linkedin.com/in/rodrigo-firmo/",
    },
  ]);

  return (
    <Container className="about">
      <LogoContainer className="logo-container">
        <Image className="logo-container__image" src={logoIMG} alt="Logo" />
        <Caption className="logo-container__caption">
          <Text className="text--top">MatchPlayers</Text>
          <Text className="text--bottom">Social Media For Gamers</Text>
        </Caption>
      </LogoContainer>

      <DevelopersList className="developers-container">
        {dataDev.map((developer, index) => (
          <CardDev key={index} developer={developer} />
        ))}
      </DevelopersList>

      <GeneralButton onClick={() => history.push("/")}>
        VOLTAR AO INICIO
      </GeneralButton>
    </Container>
  );
};

export default About;
