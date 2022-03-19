import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";

import * as styles from "./style";
import logo from "../../Assets/img/logo.png";
import { UserDataContext } from "../../providers/userData";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const LandingPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, isAuth } = useContext(UserDataContext);

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
    handleLogin(data, history);
  };
  const showPasswordFunction = () => {
    setShowPassword(!showPassword);
  };

  if (isAuth) {
    return <Redirect to="/feed" />;
  }

  return (
    <>
      <styles.Container>
        <styles.FigureDesktop>
          <styles.DivLogo>
            <img src={logo} alt="Logo" />
            <div>
              <h3>MatchPlayers</h3>
              <span>Social Media For Games</span>
            </div>
          </styles.DivLogo>
          <p>
            Uma plataforma de rede social que integra o público gamer. Nela o
            você poderá adicionar seus amigos, seus jogos favoritos, cadastrar
            uma partida sua ou procurar por alguma existente. Você poderá se
            conectar com a comunidade e realizar conquistas. Será possível
            também ver as postagens de outros membros sobre notícias da
            comunidade gamer.
          </p>
        </styles.FigureDesktop>
        <styles.BoxForm>
          <figure>
            <img src={logo} alt="Logo" />
            <div>
              <h3>MatchPlayers</h3>
              <span>Social Media For Games</span>
            </div>
          </figure>
          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <div>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("email")}
              />
            </div>
            <span>{errors.email?.message}</span>
            <div>
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
            </div>
            <span>{errors.password?.message}</span>
            <Button variant="contained" type="submit">
              Entrar
            </Button>
          </form>
          <span>
            Novo por aqui ?
            <styles.Link to="/register">
              <span>Cadastre-se</span>
            </styles.Link>
          </span>
        </styles.BoxForm>
      </styles.Container>
    </>
  );
};

export default LandingPage;
