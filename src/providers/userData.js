import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services";

export const UserDataContext = createContext([]);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );

  const handleLogin = (data, history) => {
    Api.post("/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        localStorage.setItem(
          "@matchplayers-token",
          JSON.stringify(res.data.accessToken)
        );
        localStorage.setItem(
          "@matchplayers-userData",
          JSON.stringify(res.data.user)
        );
        toast.success("Bem vindo ao Match Players");
        history.push("/feed");
      })
      .catch(() => toast.error("Usuário ou Senha Inválidos"));
  };

  const handleUserProfile = (id) => {
    Api.get(`/644/users/${id}`)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  const handleRegister = (data, history) => {
    Api.post("/users", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Conta cadastrada com sucesso");

        history.push("/");
      })
      .catch((err) => toast.error("Usuário já cadastrado, tente outro email"));
  };
  return (
    <UserDataContext.Provider
      value={{ userData, handleLogin, handleRegister, handleUserProfile }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
