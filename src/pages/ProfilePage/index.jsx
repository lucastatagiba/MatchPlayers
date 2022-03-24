//EXTERNAL DEPENDENCIES
import { useContext, useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonRemove } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";

//INTERNAL DEPENDENCIES
import { UserDataContext } from "../../providers/user/userData";
import { GamesContext } from "../../providers/games/games";
import { PostListContext } from "../../providers/posts/posts";
import Header from "../../components/Header";
import ListCard from "../../components/ListCard";
import CardGames from "../../components/CardGames/index.jsx";
import GeneralButton from "../../components/GeneralButton";
import GeralButton from "../../components/GeneralButton";
import SelectTime from "../../components/SelectTime";
import FileField from "../../components/FileField";
import CardFriends from "../../components/CardFriends";

//STYLES
import {
  Container,
  ModalContainer,
  Modal,
  Title,
  Preview,
  ProfileCardContainer,
  ProfileCard,
  ProfileCardTop,
  Edit,
  ProfileCardUserInfo,
  UserPhoto,
  UserNickname,
  ProfileCardBottom,
  BottomLeft,
  BottomRight,
  Avaliability,
  Schedule,
  EditSchedule,
  ProfileContentContainer,
  Feed,
  FriendsList,
  Selects,
  TitleFriends,
} from "./style";

const ProfilePage = () => {
  const history = useHistory();

  const { handleSubmit } = useForm();
  const {
    userData,
    userProfile,
    isAuth,
    handleAddFriend,
    handleRemoveFriend,
    handleProfileUser,
    handleSetTimeAvailability,
    imgBase64Background,
    setImgBase64Background,
    handleChangeUserBackground,
  } = useContext(UserDataContext);
  const { games } = useContext(GamesContext);
  const { UserpostList, setUserPostList, postList } =
    useContext(PostListContext);
  const [photoProfile] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")).profileIMG || ""
  );
  const [initialSelect, setInitialSelect] = useState("");
  const [finalSelect, setFinalSelect] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeModal, setTimeModal] = useState(false);

  const handleTimeAvailability = (time) => {
    setTimeModal(!timeModal);
    handleSetTimeAvailability(time);
  };

  const handleAddUser = () => {
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

  const onSubmitForm = () => {
    setIsModalOpen((state) => !state);

    handleChangeUserBackground();
  };

  useEffect(() => {
    setUserPostList(postList.filter((post) => post.userId === userProfile.id));
  }, [userProfile]);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ModalContainer
        className="modal-background-container"
        onClick={() => setIsModalOpen((state) => !state)}
        display={isModalOpen ? "flex" : "none"}
      >
        <Modal className="modal" onSubmit={handleSubmit(onSubmitForm)}>
          <Title className="modal__title">Pré-visualizar Imagem:</Title>

          <Preview
            className="modal__preview"
            src={
              imgBase64Background === ""
                ? userData.profileBackgroundIMG
                : imgBase64Background
            }
            alt="Pré-visualizar imagem de fundo"
          />

          <FileField
            state={setImgBase64Background}
            id="background"
            placeholder="Imagem de Fundo"
            type="file"
          />

          <GeneralButton onClick={() => setIsModalOpen((state) => !state)}>
            Salvar Alterações
          </GeneralButton>
        </Modal>
      </ModalContainer>

      <Header />

      <Container className="profile-page">
        <ProfileCardContainer className="profile-card-container">
          <ProfileCard className="profile-card">
            <ProfileCardTop
              className="profile-card-top"
              background={userProfile.profileBackgroundIMG}
            >
              <ProfileCardUserInfo className="user-info">
                <UserPhoto
                  className="user-info__photo"
                  src={
                    userProfile.profileIMG === ""
                      ? photoProfile
                      : userProfile.profileIMG
                  }
                  alt={`Pessoa ${userProfile.name}`}
                />

                <UserNickname className="user-info__nickname">
                  {userProfile.nickname}
                </UserNickname>
              </ProfileCardUserInfo>

              {userProfile.userId === userData.userId && (
                <Edit
                  className="profile-card-top__edit"
                  onClick={() => setIsModalOpen((state) => !state)}
                >
                  <BsPencilFill />
                </Edit>
              )}
            </ProfileCardTop>

            <ProfileCardBottom className="profile-card-bottom">
              <BottomLeft className="profile-card-bottom__left">
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
              </BottomLeft>

              <BottomRight className="bottom-right">
                <Avaliability className="bottom-right__avaliability">
                  Disponibilidade de Horários:
                </Avaliability>

                <Schedule className="bottom-right__schedule">
                  {userProfile.timeAvailability.length !== 0
                    ? userProfile.timeAvailability
                    : "Não Selecionado"}
                </Schedule>

                {userData.userId === userProfile.userId && (
                  <EditSchedule
                    className="bottom-right__edit-schedule"
                    onClick={() => setTimeModal(!timeModal)}
                  >
                    Editar Horários
                  </EditSchedule>
                )}

                {timeModal && (
                  <Selects className="selects-container">
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
                        handleTimeAvailability(
                          `${initialSelect}:00 até ${finalSelect}:00 `
                        );
                      }}
                    />
                  </Selects>
                )}

                {userData.userId !== userProfile.userId &&
                  (userData.friendList.length === 0 ? (
                    <GeneralButton id="friend" onClick={() => handleAddUser()}>
                      <IoMdPersonAdd />
                      Seguir Amigo
                    </GeneralButton>
                  ) : !userData.friendList.find((item) => {
                      return item.userId === userProfile.userId;
                    }) ? (
                    <GeneralButton id="friend" onClick={() => handleAddUser()}>
                      <IoMdPersonAdd />
                      Seguir Amigo
                    </GeneralButton>
                  ) : (
                    <GeneralButton
                      id="friend"
                      onClick={() => handleRemoveUser()}
                    >
                      <IoPersonRemove />
                      Deixar de Seguir
                    </GeneralButton>
                  ))}
              </BottomRight>
            </ProfileCardBottom>
          </ProfileCard>
        </ProfileCardContainer>

        <ProfileContentContainer className="content-container">
          <Feed className="content-container__feed">
            <ListCard postList={UserpostList} />
          </Feed>

          <FriendsList className="friendslist">
            <TitleFriends className="friendslist-conatiner__title">
              Amigos
            </TitleFriends>

            {userProfile.friendList.length !== 0
              ? userProfile.friendList.map((friend) => (
                  <CardFriends
                    key={friend.userId}
                    image={friend.profileIMG}
                    name={friend.name}
                    onClick={() => handleProfileUser(friend.userId, history)}
                  />
                ))
              : "Nenhum Seguido"}
          </FriendsList>
        </ProfileContentContainer>
      </Container>
    </>
  );
};

export default ProfilePage;
