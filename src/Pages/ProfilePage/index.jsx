import { useContext } from "react";

import { IoMdPersonAdd } from "react-icons/io";

import Header from "../../components/Header";
import CardGames from "../../components/CardGames/index.jsx";
import GeneralButton from "../../components/GeneralButton";
import CardFeed from "../../components/CardFeed";
import { UserDataContext } from "../../providers/userData";

import * as styles from "./index";
import { Redirect } from "react-router-dom";
import ListCard from "../../components/ListCard";
import { PostListContext } from "../../providers/posts";

const ProfilePage = () => {
  const { userData, isAuth } = useContext(UserDataContext);
  const { UserpostList } = useContext(PostListContext);

  const {
    email,
    friendList,
    gameList,
    name,
    nickname,
    posts,
    profileIMG,
    timeAvailability,
    profileBackgroundIMG,
  } = userData;
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
              <styles.UserPhoto src={profileIMG} alt={`Pessoa ${name}`} />

              <styles.UserNickname>{nickname}</styles.UserNickname>

              <styles.UserName>{name}</styles.UserName>

              <styles.UserEmail>{email}</styles.UserEmail>
            </styles.ProfileCardUserInfo>

            <styles.ProfileCardTop background={profileBackgroundIMG} />

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
                    {timeAvailability[0]} ~ {timeAvailability[1]}
                  </styles.Text>
                </styles.Avaliable>

                <GeneralButton>
                  <IoMdPersonAdd />
                  Adicionar Amigo
                </GeneralButton>
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
