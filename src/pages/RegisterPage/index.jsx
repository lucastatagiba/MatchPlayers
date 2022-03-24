//EXTERNAL DEPENDENCIES
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { TextField } from "@mui/material";

//INTERNAL DEPENDENCIES
import { UserDataContext } from "../../providers/user/userData";
import logo from "../../assets/img/logo.png";

//STYLES
import {
  Container,
  RightContainer,
  LogoContainer,
  Text,
  BoxForm,
  Link,
  Caption,
  Image,
  FormContainer,
  InputContainer,
  Button,
} from "./style";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister } = useContext(UserDataContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu Nome Completo"),
    nickname: yup.string().required("Digite seu Apelido"),
    email: yup.string().required("Digite seu email").email("Formato Inválido"),
    email_confirm: yup
      .string()
      .required("Digite seu email")
      .email("Formato Inválido")
      .oneOf([yup.ref("email")], "Emails Diferentes"),
    password: yup.string().required("Digite sua senha"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleSubmitRegister = (data) => {
    const newData = {
      name: data.name,
      email: data.email,
      nickname: data.nickname,
      password: data.password,
    };
    handleRegister(newData, history);
  };

  const showPasswordFunction = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container className="register">
        <RightContainer className="register-right">
          <LogoContainer className="logo-container">
            <Image className="logo-container__image" src={logo} alt="Logo" />
            <Caption className="logo-container__caption">
              <Text className="logo-container__text--top">MatchPlayers</Text>
              <Text className="logo-container__text--bottom">
                Social Media For Games
              </Text>
            </Caption>
          </LogoContainer>
          <Text className="register-right__text">
            Um lugar onde é possível listar aquilo que mais gosta de jogar,
            adicionar seus amigos, chamá-los para jogar uma partida de CS, Lol,
            COD, PUBG e até mesmo acompanhar notícias interessantes sobre o
            mundo dos games, em um só lugar.
          </Text>
        </RightContainer>

        <BoxForm className="form-box">
          <LogoContainer className="form-logo-container">
            <Image
              className="form-logo-container__image"
              src={logo}
              alt="Logo"
            />
            <Caption className="form-logo-container__caption">
              <Text className="form-logo-container__text--top">
                MatchPlayers
              </Text>
              <Text className="form-logo-container__text--bottom">
                Social Media For Games
              </Text>
            </Caption>
          </LogoContainer>

          <FormContainer
            className="form-box__container"
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <InputContainer className=".input-container">
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("name")}
              />
            </InputContainer>
            <Text className="text--error">{errors.name?.message}</Text>
            <InputContainer className=".input-container">
              <TextField
                fullWidth
                label="Apelido"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("nickname")}
              />
            </InputContainer>
            <Text className="text--error">{errors.nickname?.message}</Text>
            <InputContainer className=".input-container">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("email")}
              />
            </InputContainer>
            <Text className="text--error">{errors.email?.message}</Text>
            <InputContainer className=".input-container">
              <TextField
                fullWidth
                label="Confirmar Email"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("email_confirm")}
              />
            </InputContainer>
            <Text className="text--error">{errors.email_confirm?.message}</Text>
            <InputContainer className="input-container--password">
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
            </InputContainer>
            <Text className="text--error">{errors.password?.message}</Text>
            <InputContainer>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Confirmar Senha"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("password_confirm")}
              />
            </InputContainer>
            <Text className="text--error">
              {errors.password_confirm?.message}
            </Text>
            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          </FormContainer>

          <Text className="form-footer__text">
            Ja é um Match Player ?
            <Link to="/">
              <Text className="form-footer__link">Faça Login</Text>
            </Link>
          </Text>
        </BoxForm>
      </Container>
    </>
  );
};

export default RegisterPage;
