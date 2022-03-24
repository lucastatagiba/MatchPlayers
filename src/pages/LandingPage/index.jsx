//EXTERNAL DEPENDENCIES
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

//INTERNAL DEPENDENCIES
import { UserDataContext } from "../../providers/user/userData";
import { PostListContext } from "../../providers/posts/posts";
import logo from "../../assets/img/logo.png";

//STYLES
import * as styles from "./style";
import {
  Container,
  LogoContainer,
  BoxForm,
  ButtonEntrar,
  TitleH3,
  Span,
  SpanCadastreSe,
  Image,
  ContainerTitle,
  TitlePresentation,
  SpanLeft,
  DivLogo,
  Text,
  Form,
  DivForm,
  FigureDesktop,
} from "./style";

const LandingPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, isAuth } = useContext(UserDataContext);
  const { setUserData, setUserToken } = useContext(PostListContext);

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Digite seu email").email("Formato Inválido"),
    password: yup.string().required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleSubmitLogin = (data) => {
    console.log("oi");
    handleLogin(data, history, setUserData, setUserToken);
  };
  const showPasswordFunction = () => {
    setShowPassword(!showPassword);
  };
  if (isAuth) {
    return <Redirect to="/feed" />;
  }

  return (
    <>
      <Container>
        <FigureDesktop>
          <DivLogo>
            <Image src={logo} alt="Logo" />
            <ContainerTitle>
              <TitlePresentation>MatchPlayers</TitlePresentation>
              <SpanLeft>Social Media For Games</SpanLeft>
            </ContainerTitle>
          </DivLogo>
          <Text>
            Uma plataforma de rede social que integra o público gamer. Nela o
            você poderá adicionar seus amigos, seus jogos favoritos, cadastrar
            uma partida sua ou procurar por alguma existente. Você poderá se
            conectar com a comunidade e realizar conquistas. Será possível
            também ver as postagens de outros membros sobre notícias da
            comunidade gamer.
          </Text>
        </FigureDesktop>
        <BoxForm>
          <LogoContainer>
            <Image src={logo} alt="Logo" />
            <ContainerTitle>
              <TitleH3>MatchPlayers</TitleH3>
              <Span>Social Media For Games</Span>
            </ContainerTitle>
          </LogoContainer>
          <Form onSubmit={handleSubmit(handleSubmitLogin)}>
            <DivForm>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("email")}
              />
            </DivForm>
            <SpanCadastreSe>{errors.email?.message}</SpanCadastreSe>
            <DivForm>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Senha"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("password")}
              />
              {showPassword ? (
                <AiFillEye onClick={showPasswordFunction} />
              ) : (
                <AiFillEyeInvisible onClick={showPasswordFunction} />
              )}
            </DivForm>
            <SpanCadastreSe>{errors.password?.message}</SpanCadastreSe>
            <ButtonEntrar
              className="ButtonEntrar"
              variant="contained"
              type="submit"
            >
              Entrar
            </ButtonEntrar>
          </Form>
          <SpanCadastreSe>
            Novo por aqui ?
            <styles.Link to="/register">
              <SpanCadastreSe>Cadastre-se</SpanCadastreSe>
            </styles.Link>
          </SpanCadastreSe>
        </BoxForm>
      </Container>
    </>
  );
};

export default LandingPage;
