import { useContext, useEffect, useState } from "react";

import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonRemove } from "react-icons/io5";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../../components/Header";
import CardGames from "../../components/CardGames/index.jsx";
import GeneralButton from "../../components/GeneralButton";
import { UserDataContext } from "../../providers/userData";
import { Redirect } from "react-router-dom";
import ListCard from "../../components/ListCard";
import { PostListContext } from "../../providers/posts";
import * as styles from "./style";
import GeralButton from "../../components/GeneralButton";
import SelectTime from "../../components/SelectTime";
import { GamesContext } from "../../providers/games";

const ProfilePage = () => {
  const {
    userData,
    userProfile,
    isAuth,
    handleAddFriend,
    handleRemoveFriend,
    handleProfileUser,
    handleSetTimeAvailability,
  } = useContext(UserDataContext);

  const history = useHistory();
  const { games } = useContext(GamesContext);
  const { UserpostList, setUserPostList, postList } =
    useContext(PostListContext);
  const [photoProfile] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")).profileIMG || ""
  );
  const [initialSelect, setInitialSelect] = useState("");
  const [finalSelect, setFinalSelect] = useState("");
  const [timeModal, setTimeModal] = useState(false);
  const {
    email,
    gameList,
    name,
    nickname,
    timeAvailability,
    profileBackgroundIMG,
  } = userData;

  useEffect(() => {
    setUserPostList(postList.filter((post) => post.userId === userProfile.id));
  }, [userProfile]);

  const handleTimeAvailability = (time) => {
    setTimeModal(!timeModal);
    handleSetTimeAvailability(time);
  };

  const handleAddUser = () => {
    console.log("adicionou");
    const newFriend = {
      name: userProfile.name,
      profileIMG: userProfile.profileIMG,
      userId: userProfile.userId,
    };

    const newListFriend = {
      userId: userData.id,
      friendList: [...userData.friendList, newFriend],
    };
    handleAddFriend(newListFriend);
  };

  const handleRemoveUser = () => {
    const newList = userData.friendList.filter((item) => {
      return item.userId !== userProfile.userId;
    });
    const newListFriend = {
      userId: userData.id,
      friendList: [...newList],
    };
    handleRemoveFriend(newListFriend);
  };

  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header />

      <styles.Container>
        <styles.ProfileCardContainer>
          <styles.ProfileCard>
            <styles.ProfileCardTop
              background={userProfile.profileBackgroundIMG}
            >
              <styles.ProfileCardUserInfo>
                <styles.UserPhoto
                  src={
                    userProfile.profileIMG === ""
                      ? photoProfile
                      : userProfile.profileIMG
                  }
                  alt={`Pessoa ${userProfile.name}`}
                />

                <styles.UserNickname>
                  {userProfile.nickname}
                </styles.UserNickname>

                <styles.UserInfo>{userProfile.name}</styles.UserInfo>

                <styles.UserInfo>{userProfile.email}</styles.UserInfo>
              </styles.ProfileCardUserInfo>
            </styles.ProfileCardTop>

            <styles.ProfileCardBottom>
              <styles.BottomLeft>
                {games
                  .filter((game) => userProfile.gameList.includes(game.name))
                  .map((game) => {
                    return (
                      <CardGames
                        key={game.name}
                        image={game.image}
                        name={game.name}
                      />
                    );
                  })}
              </styles.BottomLeft>

              <styles.BottomRight>
                <styles.Avaliable>
                  <styles.Text>Disponibilidade de Horários</styles.Text>
                  <styles.Text>
                    {userData.userId !== userProfile.userId
                      ? userProfile.timeAvailability
                      : userData.timeAvailability}
                  </styles.Text>

                  {userData.userId !== userProfile.userId ? (
                    ""
                  ) : (
                    <>
                      <button
                        onClick={() => setTimeModal(!timeModal)}
                        className="openTimeEdit"
                      >
                        Editar Horários
                      </button>
                      {!timeModal ? (
                        ""
                      ) : (
                        <styles.Selects>
                          <SelectTime
                            handleFunction={(e) =>
                              setInitialSelect(e.target.value)
                            }
                          />
                          <SelectTime
                            handleFunction={(e) =>
                              setFinalSelect(e.target.value)
                            }
                          />

                          <GeralButton
                            children={"Salvar"}
                            onClick={(e) => {
                              e.preventDefault();
                              handleTimeAvailability(
                                `${initialSelect}:00 até ${finalSelect}:00 `
                              );
                            }}
                          />
                        </styles.Selects>
                      )}
                    </>
                  )}
                </styles.Avaliable>

                {userData.userId !== userProfile.userId &&
                  (userData.friendList.length === 0 ? (
                    <>
                      <GeneralButton onClick={() => handleAddUser()}>
                        <IoMdPersonAdd />
                        Seguir Amigo
                      </GeneralButton>
                    </>
                  ) : !userData.friendList.find((item) => {
                      return item.userId === userProfile.userId;
                    }) ? (
                    <>
                      <GeneralButton onClick={() => handleAddUser()}>
                        <IoMdPersonAdd />
                        Seguir Amigo
                      </GeneralButton>
                    </>
                  ) : (
                    <>
                      <GeneralButton onClick={() => handleRemoveUser()}>
                        <IoPersonRemove />
                        Deixar de Seguir
                      </GeneralButton>
                    </>
                  ))}
              </styles.BottomRight>
            </styles.ProfileCardBottom>
          </styles.ProfileCard>
        </styles.ProfileCardContainer>

        <styles.ProfileContentContainer>
          <styles.Feed>
            <ListCard postList={UserpostList}></ListCard>
          </styles.Feed>
          <styles.FriendsList>
            <h3>Lista de Amigos</h3>
            {userProfile.friendList.map((friend) => (
              <li
                key={friend.userId}
                onClick={() => handleProfileUser(friend.userId, history)}
              >
                <img alt="userPhoto" src={friend.profileIMG} />
                <h2>{friend.name}</h2>
              </li>
            ))}
          </styles.FriendsList>
        </styles.ProfileContentContainer>
      </styles.Container>
    </>
  );
};

export default ProfilePage;
