import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services";

export const UserDataContext = createContext([]);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );
  const [userToken] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-token")) || []
  );
  const [isAuth, setIsAuth] = useState(false);
  const [imgBase64Post, setImgBase64Post] = useState("");
  const [imgBase64User, setImgBase64User] = useState("");
  const [loadingPhoto, setLoadingPhoto] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [userGames, setUserGames] = useState([]);
  const [appearModal, setAppearModal] = useState({
    config: false,
    message: false,
    menu: false,
    photo: false,
  });
  const [userProfile, setUserProfile] = useState("");
  const [listUsers, setListUsers] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@matchplayers-token"));

    if (token) {
      return setIsAuth(true);
    }
  }, [isAuth]);

  useEffect(() => {
    Api.get("/644/users").then((res) => {
      setListUsers(res.data);
    });
  }, [inputvalue]);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Volte Sempre =)");
    setIsAuth(false);
  };
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
        setUserProfile(res.data.user);
        toast.success("Bem vindo ao Match Players");
        history.push("/feed");
        setIsAuth(true);
      })
      .catch(() => toast.error("Usuário ou Senha Inválidos"));
  };
  const handleRegister = (data, history) => {
    Api.post("/users", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        toast.success("Conta cadastrada com sucesso");

        history.push("/");
      })
      .catch((err) => toast.error("Usuário já cadastrado, tente outro email"));
  };
  const handlechangeUserIMG = () => {
    setIsloading(true);
    setLoadingPhoto("https://i.stack.imgur.com/ATB3o.gif");

    Api.patch(
      `/644/users/${userData.id}`,
      {
        userId: userData.id,
        profileIMG: `${imgBase64User}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
      .then((res) => {
        setLoadingPhoto("");
        setIsloading(false);
        setAppearModal({
          config: false,
          message: false,
          menu: false,
          photo: false,
        });
        localStorage.setItem(
          "@matchplayers-userData",
          JSON.stringify(res.data)
        );
        setUserData(res.data);
      })
      .catch((res) => toast.error("Tente Novamente"));
  };

  // a data do handleGames Register deve entrar somente
  /*

  {
    userId: id do usuário,
    gameList: [...userData.gameList, novo jogo adicionado]
  }

  */

  const handleGamesRegister = () => {
    const data = {};

    data.gameList = userGames;

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

  const handleProfileUser = (idUser, history) => {
    Api.get(`644/users/${idUser}`).then((res) => {
      console.log(res.data);
      setUserProfile(res.data);
      history.push(`/profile/${res.data.name}`);
    });
  };

  // a data do handleGames Edit deve entrar somente
  /*

  {
    userId: id do usuário,
    gameList: [jogos selecionados]
  }

  */

  // const handleGamesEdit = (data) => {
  //   Api.patch(`/644/users/${userData.id}`, data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${userToken}`,
  //     },
  //   })
  //     .then((res) => {
  //       localStorage.setItem(
  //         "@matchplayers-userData",
  //         JSON.stringify(res.data)
  //       );
  //       setUserData(res.data);
  //       toast.success("Jogos Adicionados");
  //     })
  //     .catch((res) => toast.error("Tente Novamente"));
  // };

  const handleAddFriend = (data) => {
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
        toast.success("Adicionado com Sucesso");
      })
      .catch(() => toast.error("Tente Novamente!"));
  };

  const handleRemoveFriend = (data) => {
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
        toast.success("Removido com Sucesso");
      })
      .catch(() => toast.error("Tente Novamente!"));
  };

  const handleSetTimeAvailability = (data) => {
    const time = {
      timeAvailability: data,
    };
    const token = JSON.parse(localStorage.getItem("@matchplayers-token"));

    Api.patch(`/644/users/${userData.id}`, time, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        localStorage.setItem(
          "@matchplayers-userData",
          JSON.stringify(res.data)
        );
        setUserData(res.data);
        toast.success("Horário alterado");
      })
      .catch(() => toast.error("Tente Novamente!"));
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        userProfile,
        setUserProfile,
        handleLogin,
        handleRegister,
        isAuth,
        handleLogout,
        setImgBase64Post,
        imgBase64Post,
        imgBase64User,
        setImgBase64User,
        handlechangeUserIMG,
        loadingPhoto,
        setLoadingPhoto,
        appearModal,
        setAppearModal,
        isloading,
        userGames,
        setUserGames,
        handleGamesRegister,
        handleProfileUser,
        handleAddFriend,
        handleRemoveFriend,
        listUsers,
        searchUser,
        setSearchUser,
        inputvalue,
        setInputvalue,
        handleSetTimeAvailability,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
