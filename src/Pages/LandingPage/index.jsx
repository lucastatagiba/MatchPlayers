import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

import * as styles from "./style";
import logo from "../../Assets/img/logo.png";

const LandingPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
    console.log(data);
  };
  const showPasswordFunction = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <styles.Container>
        <figure>
          <img src={logo} alt="Logo" />
          <div>
            <h3>MatchPlayers</h3>
            <span>Social Media For Games</span>
          </div>
        </figure>
        <styles.BoxForm>
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
