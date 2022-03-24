//EXTERNAL DEPENDENCIES
import { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

//INTERNAL DEPENDENCIES
import { PostListContext } from "../../providers/posts/posts";
import { GamesContext } from "../../providers/games/games";
import { UserDataContext } from "../../providers/user/userData";
import Header from "../../components/Header";
import CardGames from "../../components/CardGames";
import ListCard from "../../components/ListCard";
import GeralButton from "../../components/GeneralButton";
import ModalPub from "../../components/ModalPub";
import ListNews from "../../components/ListNews";
import CardFriends from "../../components/CardFriends";
import { BsCardImage } from "react-icons/bs";

//STYLES
import {
  Container,
  UserInfo,
  UserCard,
  PhotoContainer,
  Photo,
  Caption,
  GamesList,
  UserSchedule,
  Avaliability,
  Schedule,
  Feed,
  Navigation,
  Select,
  PostsContainer,
  PostsTop,
  PhotoPub,
  PostsBottom,
  Friends,
  Title,
  FriendsList,
} from "./style";

const FeedPage = () => {
  const history = useHistory();

  const [photoProfile] = useState(
    localStorage.getItem("@matchplayers-userData")
      ? JSON.parse(localStorage.getItem("@matchplayers-userData")).profileIMG
      : ""
  );
  const [modalPub, setModalPub] = useState(false);
  const {
    postList,
    setPostList,
    postListFriends,
    setPostListFriends,
    setUserData,
    handleGetNews,
  } = useContext(PostListContext);
  const { games } = useContext(GamesContext);
  const { isAuth, userData, handleProfileUser, setImgBase64Post } =
    useContext(UserDataContext);
  const [feedSwitch, setFeedSwitch] = useState(true);
  const [listFriendSwitch, setListFriendSwitch] = useState(false);

  const filterFriends = (event) => {
    const friends = userData.friendList.map((friend) => friend.userId);

    setPostListFriends(
      postList.filter((post) => friends.indexOf(post.userId) !== -1)
    );

    if (event.target.value === "justFriends") {
      setListFriendSwitch(true);
    } else {
      setListFriendSwitch(false);
    }
  };

  const handleNewsList = () => {
    handleGetNews();
    setFeedSwitch(false);
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("@matchplayers-userData")));
  }, [modalPub]);

  useEffect(() => {
    setPostListFriends(postList);
  }, []);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />

      <Container className="feed-page">
        <UserInfo className="user-container">
          <UserCard className="usercard-container">
            <PhotoContainer className="user-photo-container">
              <Photo
                className="user-photo-container__image"
                src={
                  userData.profileIMG === ""
                    ? photoProfile
                    : userData.profileIMG
                }
                alt={`Usuário ${userData.nickname}`}
                onClick={() => handleProfileUser(userData.id, history)}
              />

              <Caption
                className="user-photo-container__caption"
                onClick={() => handleProfileUser(userData.id, history)}
              >
                {userData.nickname}
              </Caption>
            </PhotoContainer>

            <GamesList className="games-list-container">
              {userData.gameList.length !== 0
                ? games
                    .filter((game) => userData.gameList.includes(game.name))
                    .map((game) => {
                      return (
                        <CardGames
                          key={game.name}
                          image={game.image}
                          name={game.name}
                          display={true}
                        />
                      );
                    })
                : "Não Selecionado"}
            </GamesList>
          </UserCard>

          <UserSchedule className="userschedule-container">
            <Avaliability className="userschedule-container__avaliability">
              Disponibilidade:
            </Avaliability>

            <Schedule className="userschedule-container__schedule">
              {userData.timeAvailability.length !== 0
                ? userData.timeAvailability
                : "Não Selecionado"}
            </Schedule>
          </UserSchedule>
        </UserInfo>

        <Feed className="feed-container">
          <Navigation className="navigation-container">
            <GeralButton onClick={() => setFeedSwitch(true)}>
              Publicações
            </GeralButton>

            <GeralButton onClick={handleNewsList}>Notícias</GeralButton>

            <Select
              className="navigation-container__select"
              onChange={filterFriends}
            >
              <option value="all">Todos</option>
              <option value="justFriends"> Somente amigos </option>
            </Select>
          </Navigation>

          <PostsContainer className="posts-container">
            {modalPub && (
              <ModalPub
                closeModal={() => {
                  setImgBase64Post(false);
                  setModalPub(false);
                }}
              />
            )}

            <PostsTop className="poststop-container">
              <PhotoPub
                className="poststop-container__photopub"
                src={userData.profileIMG}
                alt={`Usuário ${userData.nickname}`}
              />

              <GeralButton
                bgcolor={"#F3F2EF"}
                width={"95%"}
                color={"#6C8394"}
                onClick={() => setModalPub(true)}
              >
                Começar Publicação
              </GeralButton>
            </PostsTop>

            <PostsBottom className="postsbottom-container">
              <GeralButton
                bgcolor={"var(--color-orange)"}
                onClick={() => setModalPub(true)}
              >
                <BsCardImage />
                Foto
              </GeralButton>

              <GeralButton
                onClick={() => setModalPub(true)}
                bgcolor={"#6C8394"}
              >
                Publicar
              </GeralButton>
            </PostsBottom>
          </PostsContainer>

          {feedSwitch ? (
            <ListCard
              postList={listFriendSwitch ? postListFriends : postList}
            />
          ) : (
            <ListNews />
          )}
        </Feed>

        <Friends className="friendslist-conatiner">
          <Title className="friendslist-conatiner__title">Amigos</Title>

          <FriendsList className="friendslist-conatiner__friendslist">
            {userData.friendList.length !== 0
              ? userData.friendList.map((friend) => (
                  <CardFriends
                    key={friend.userId}
                    image={friend.profileIMG}
                    name={friend.name}
                    onClick={() => handleProfileUser(friend.userId, history)}
                  />
                ))
              : "Nenhum Seguido"}
          </FriendsList>
        </Friends>
      </Container>
    </>
  );
};

export default FeedPage;
