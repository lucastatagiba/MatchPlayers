import { useContext, useEffect, useState } from "react";

import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonRemove } from "react-icons/io5";

import Header from "../../components/Header";
import CardGames from "../../components/CardGames/index.jsx";
import GeneralButton from "../../components/GeneralButton";
import { UserDataContext } from "../../providers/userData";

import * as styles from "./style";
import { Redirect } from "react-router-dom";
import ListCard from "../../components/ListCard";
import { PostListContext } from "../../providers/posts";
import GeralButton from "../../components/GeneralButton";
import SelectTime from "../../components/SelectTime";

const ProfilePage = () => {
  const {
    userData,
    userProfile,
    isAuth,
    handleAddFriend,
    handleRemoveFriend,
    handleSetTimeAvailability,
  } = useContext(UserDataContext);

  const { UserpostList, setUserPostList, postList } =
    useContext(PostListContext);
  const [photoProfile] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")).profileIMG || ""
  );
  const [initialSelect, setInitialSelect] = useState("");
  const [finalSelect, setFinalSelect] = useState("");
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
  }, []);

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
            <styles.ProfileCardUserInfo>
              <styles.UserPhoto
                src={
                  userProfile.profileIMG === ""
                    ? photoProfile
                    : userProfile.profileIMG
                }
                alt={`Pessoa ${userProfile.name}`}
              />

              <styles.UserNickname>{userProfile.nickname}</styles.UserNickname>

              <styles.UserName>{userProfile.name}</styles.UserName>

              <styles.UserEmail>{userProfile.email}</styles.UserEmail>
            </styles.ProfileCardUserInfo>

            <styles.ProfileCardTop
              background={userProfile.profileBackgroundIMG}
            />

            <styles.ProfileCardBottom>
              <styles.BottomLeft>
                {gameList.map((game, index) => {
                  return (
                    <CardGames
                      key={index}
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
                  {/* onChange={(e) => setInitialSelect(e.target.value)} */}
                  {/* onChange={(e) => setFinalSelect(e.target.value)} */}

                  {userData.userId !== userProfile.userId ? (
                    ""
                  ) : (
                    <>
                      <SelectTime
                        handleFunction={(e) => setInitialSelect(e.target.value)}
                      />
                      <SelectTime
                        handleFunction={(e) => setFinalSelect(e.target.value)}
                      />

                      <GeralButton
                        children={"Salvar"}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSetTimeAvailability(
                            `${initialSelect}:00 até ${finalSelect}:00 `
                          );
                        }}
                      />
                    </>
                  )}
                </styles.Avaliable>

                {userData.userId !== userProfile.userId &&
                  (userData.friendList.length === 0 ? (
                    <>
                      <GeneralButton onClick={() => handleAddUser()}>
                        <IoMdPersonAdd />
                        Adicionar Amigo
                      </GeneralButton>
                    </>
                  ) : !userData.friendList.find((item) => {
                      return item.userId === userProfile.userId;
                    }) ? (
                    <>
                      <GeneralButton onClick={() => handleAddUser()}>
                        <IoMdPersonAdd />
                        Adicionar Amigo
                      </GeneralButton>
                    </>
                  ) : (
                    <>
                      <GeneralButton onClick={() => handleRemoveUser()}>
                        <IoPersonRemove />
                        Remover Amigo
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
          <styles.PlaceHolder>
            {/*substituir por frinds list*/}
          </styles.PlaceHolder>
        </styles.ProfileContentContainer>
      </styles.Container>
    </>
  );
};

export default ProfilePage;
