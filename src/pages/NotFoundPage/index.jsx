import { Container, Box } from "./style";
import logoIMG from "../../assets/img/logo.png";
import Button from "../../components/GeneralButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundPage = () => {
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

          <h2>Esta Página não está disponível</h2>
          <p>
            O link pode não estar funcionando ou a Página pode ter sido
            removida. Verifique se o link que você está tentando abrir está
            correto.
          </p>
          <Link to="/">
            <Button
              bgcolor={"#6C8394"}
              children={"Voltar ao Início"}
              width={150}
            />
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default NotFoundPage;
