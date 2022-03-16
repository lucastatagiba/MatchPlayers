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
            Um lugar onde é possível listar aquilo que mais gosta de jogar,
            adicionar seus amigos, chamá-los para jogar uma partida de CS, Lol,
            COD, Pubg e até mesmo acompanhar notícias interessantes sobre o
            mundo dos games, em um só lugar.
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
          <form onSubmit={handleSubmit(handleSubmitRegister)}>
            <div>
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("name")}
              />
            </div>
            <span>{errors.name?.message}</span>
            <div>
              <TextField
                fullWidth
                label="Apelido"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("nickname")}
              />
            </div>
            <span>{errors.nickname?.message}</span>
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
                label="Confirmar Email"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("email_confirm")}
              />
            </div>
            <span>{errors.email_confirm?.message}</span>
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
            <div>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Confirmar Senha"
                variant="outlined"
                size="small"
                margin="normal"
                {...register("password_confirm")}
              />
            </div>
            <span>{errors.password_confirm?.message}</span>
            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          </form>
          <span>
            Ja é um Match Player ?
            <styles.Link to="/">
              <span>Faça Login</span>
            </styles.Link>
          </span>
        </styles.BoxForm>
      </styles.Container>
    </>
  );
};

export default RegisterPage;
