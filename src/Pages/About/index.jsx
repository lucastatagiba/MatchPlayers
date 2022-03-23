import { useState } from "react";

import CardDev from "../../components/CardDev";

import imgAndre from "../../Assets/img/Andre.jpeg";
import imgLeonardo from "../../Assets/img/Leonardo.jpeg";
import imgLucas from "../../Assets/img/Lucas.jpeg";
import imgRodrigo from "../../Assets/img/Rodrigo.jpeg";
import imgPaulo from "../../Assets/img/Paulo.jpeg";

import logoIMG from "../../Assets/img/logo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { Container, Box } from "./style";

const About = () => {
  const [dataDev, setDataDev] = useState([
    {
      nome: "Leonardo Moraes",
      funcao: "Product Owner",
      img: imgLeonardo,
      linkedin: "https://www.linkedin.com/in/leonardo-moraes-4b754517b/",
    },
    {
      nome: "Paulo Lima",
      funcao: "Scrum Master",
      img: imgPaulo,
      linkedin:
        "https://www.linkedin.com/in/paulo-henrique-rodrigues-de-lima-2a122a1ba/",
    },
    {
      nome: "Lucas Tatagiba",
      funcao: "Tech Leader",
      img: imgLucas,
      linkedin: "https://www.linkedin.com/in/lucas-tatagiba-de-oliveira/",
    },
    {
      nome: "André Machado",
      funcao: "Quality Analist",
      img: imgAndre,
      linkedin: "https://www.linkedin.com/in/andre-machado-6135a4179/",
    },
    {
      nome: "Rodrigo Firmo",
      funcao: "Quality Analist",
      img: imgRodrigo,
      linkedin: "https://www.linkedin.com/in/rodrigo-firmo/",
    },
  ]);

  return (
    <>
      <Container>
        <Box>
          <figure>
            <img className="logoimg" src={logoIMG} alt="Logo" />
            <div>
              <h3>MatchPlayers</h3>
              <span>Social Media For Games</span>
            </div>
          </figure>

          <ul>
            {dataDev.map((programador, index) => (
              <CardDev Dev={programador} key={index} />
            ))}
          </ul>
        </Box>
        <Link to="/">
          <Button
            bgcolor={"#6C8394"}
            children={"Voltar ao Início"}
            width={150}
          />
        </Link>
      </Container>
    </>
  );
};

export default About;
