import { useState, useContext, useEffect } from "react";
import { BsCardImage } from "react-icons/bs";
import { Redirect, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import GeralButton from "../../components/GeneralButton";
import ListCard from "../../components/ListCard";
import ModalPub from "../../components/ModalPub";
import { PostListContext } from "../../providers/posts";
import { UserDataContext } from "../../providers/userData";
import ListNews from "../../components/ListNews";
import { Container } from "./style";
import { Button } from "@mui/material";
import { GamesContext } from "../../providers/games";
import CardGames from "../../components/CardGames";

const FeedPage = () => {
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

  const history = useHistory();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("@matchplayers-userData")));
  }, [modalPub]);

  useEffect(() => {
    setPostListFriends(postList);
  }, []);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  const handleNewsList = () => {
    handleGetNews();
    setFeedSwitch(false);
  };

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

  return (
    <>
      <Header />

      <Container>
        <aside className="leftAside">
          <div className="divProfile">
            <img
              alt="userPhoto"
              src={
                userData.profileIMG === "" ? photoProfile : userData.profileIMG
              }
              onClick={() => handleProfileUser(userData.id, history)}
            />

            <h2 onClick={() => handleProfileUser(userData.id, history)}>
              {userData.nickname}
            </h2>
            <ul className="gameContent">
              {userData.gameList &&
                games
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
                  })}
            </ul>
          </div>
          <div className="divSchedules">
            <h3>Horários</h3>
            <span>{userData.timeAvailability}</span>
          </div>
        </aside>
        <section>
          <div className="divButtonsFeed">
            <div>
              <GeralButton onClick={() => setFeedSwitch(true)}>
                Publicações
              </GeralButton>
              <GeralButton onClick={handleNewsList}>Notícias</GeralButton>
            </div>
            <select onChange={filterFriends}>
              <option value="all">Todos</option>
              <option value="justFriends"> Somente amigos </option>
            </select>
          </div>
          <div className="divStartPub">
            <>
              {modalPub ? (
                <ModalPub
                  closeModal={() => {
                    setImgBase64Post(false);
                    setModalPub(false);
                  }}
                />
              ) : (
                <></>
              )}
            </>
            <img
              alt="UserPhoto"
              src={
                userData.profileIMG === "" ? photoProfile : userData.profileIMG
              }
            />
            <div className="containPubDiv">
              <GeralButton
                bgcolor={"#F3F2EF"}
                width={"95%"}
                color={"#6C8394"}
                onClick={() => setModalPub(true)}
              >
                Começar Publicação
              </GeralButton>
              <div className="buttonPubDiv">
                <GeralButton
                  bgcolor={"var(--Orange-primary)"}
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
              </div>
            </div>
          </div>
          {feedSwitch ? (
            <ListCard
              postList={listFriendSwitch ? postListFriends : postList}
            />
          ) : (
            <ListNews />
          )}
        </section>
        <aside className="rightAside">
          <h3>Amigos</h3>
          <ul>
            {userData.friendList.map((friend) => (
              <li
                key={friend.userId}
                onClick={() => handleProfileUser(friend.userId, history)}
              >
                <img alt="userPhoto" src={friend.profileIMG} />
                <h2>{friend.name}</h2>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  );
};
export default FeedPage;
