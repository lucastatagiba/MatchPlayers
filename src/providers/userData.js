import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services";

export const UserDataContext = createContext([]);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-token")) || []
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
        setUserData(res.data.user);
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

  // a data do handleGames Register deve entrar somente
  /*

  {
    userId: id do usuário,
    gameList: [...userData.gameList, novo jogo adicionado]
  }

  */

  const handleGamesRegister = (data) => {
    Api.patch(`/644/users/${userData.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        localStorage.setItem(
          "@matchplayers-userData",
          JSON.stringify(res.data)
        );
        setUserData(res.data);
        toast.success("Jogos Adicionados");
      })
      .catch((res) => toast.error("Tente Novamente"));
  };

  // a data do handleGames Edit deve entrar somente
  /*

  {
    userId: id do usuário,
    gameList: [jogos selecionados]
  }

  */

  const handleGamesEdit = (data) => {
    Api.patch(`/644/users/${userData.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        localStorage.setItem(
          "@matchplayers-userData",
          JSON.stringify(res.data)
        );
        setUserData(res.data);
        toast.success("Jogos Adicionados");
      })
      .catch((res) => toast.error("Tente Novamente"));
  };

  return (
    <UserDataContext.Provider
      value={{ userData, handleLogin, handleRegister, handleUserProfile }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
