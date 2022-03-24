//EXTERNAL DEPENDENCIES
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//INTERNAL DEPENDENCIES
import logoIMG from "../../assets/img/logo.png";
import Button from "../../components/GeneralButton";

//STYLES
import { Container, Box, LogoContainer, Image, Caption, Text } from "./style";

const NotFoundPage = () => {
  return (
    <>
      <Container className="notfound">
        <Box className="notfound-main">
          <LogoContainer className="logo-container">
            <Image className="logo-container__image" src={logoIMG} alt="Logo" />
            <Caption className="logo-container__caption">
              <Text className="logo-container__text--top">MatchPlayers</Text>
              <Text className="logo-container">Social Media For Games</Text>
            </Caption>
          </LogoContainer>

          <Text className="main__text--top">
            Esta Página não está disponível
          </Text>
          <Text className="main__text--bottom">
            O link pode não estar funcionando ou a Página pode ter sido
            removida. Verifique se o link que você está tentando abrir está
            correto.
          </Text>
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
