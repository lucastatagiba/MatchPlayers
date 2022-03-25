//EXTERNAL DEPENDENCIES
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
import "moment/locale/pt";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { IoMdSend, IoMdTrash } from "react-icons/io";

//INTERNAL DEPENDENCIES
import { PostListContext } from "../../providers/posts/posts";
import { UserDataContext } from "../../providers/user/userData";
import { GamesContext } from "../../providers/games/games";
import CardGames from "../CardGames";
import GeralButton from "../GeneralButton";

//STYLES
import {
  Container,
  Header,
  TrashButton,
  Photo,
  InfoContainer,
  Name,
  Moment,
  GamesList,
  Body,
  TextContent,
  ImageContainer,
  Image,
  Footer,
  Interactions,
  CommentsCounter,
  ContainerComments,
  Form,
  Label,
  TextArea,
  Comments,
} from "./style";

const CardFeed = ({
  username,
  desc,
  createdAt,
  idPost,
  profileIMG,
  postUpdate,
  postIMG,
  userId,
  comments,
  gameList,
}) => {
  const history = useHistory();

  const { games } = useContext(GamesContext);

  const { handleProfileUser, userData } = useContext(UserDataContext);
  const { handleDeletePost, handleNewPostComment, handleGetComments } =
    useContext(PostListContext);
  const { register, handleSubmit, reset } = useForm();
  const [buttonsLike, setButtonsLike] = useState({
    like: false,
    unlike: false,
  });
  const [commentsList, setCommentsList] = useState(false);

  const handleSubmitComment = (data) => {
    const newComment = {
      idPost: idPost,
      comment: data.comment,
      nickname: userData.nickname,
      userId: userData.userId,
    };
    handleNewPostComment(newComment);
    handleGetComments();
    setCommentsList(true);
    reset();
  };
  return (
    <Container className="cardfeed">
      <Header className="cardfeed-header">
        <Photo
          className="cardfeed-header__photo"
          src={profileIMG}
          alt={`Usuário ${username}`}
          onClick={() => handleProfileUser(userId, history)}
        />

        <InfoContainer className="info-container">
          <Name
            className="info-container__name"
            onClick={() => handleProfileUser(userId, history)}
          >
            {username}
          </Name>

          <Moment
            className="info-container__moment"
            pubdate
            dateTime={createdAt}
          >
            {moment(createdAt).locale("pt").fromNow()}
          </Moment>
        </InfoContainer>

        {gameList && (
          <GamesList className="games-list">
            {games
              .filter((game) => gameList.includes(game.name))
              .map((game) => {
                return (
                  <CardGames
                    key={game.name}
                    image={game.image}
                    name={game.name}
                    size={"small"}
                  />
                );
              })}
          </GamesList>
        )}

        {postUpdate && (
          <TrashButton
            className="cardfeed-header__delete"
            onClick={() => handleDeletePost(idPost)}
          >
            <IoMdTrash />
          </TrashButton>
        )}
      </Header>

      <Body className="cardfeed-body">
        <TextContent className="cardfeed-body__text-content">
          {desc}
        </TextContent>

        <ImageContainer className="post-image">
          {postIMG && (
            <Image
              className="post-image__image"
              src={postIMG}
              alt="Imagem da Publicação"
            />
          )}
        </ImageContainer>
      </Body>

      <Footer className="cardfeed-footer">
        <Interactions className="interactions">
          <GeralButton
            onClick={() =>
              setButtonsLike({
                like: !buttonsLike.like,
                unlike: false,
              })
            }
          >
            {buttonsLike.like ? <AiFillLike /> : <AiOutlineLike />}
            <span>Gostei</span>
          </GeralButton>

          <GeralButton
            onClick={() =>
              setButtonsLike({
                like: false,
                unlike: !buttonsLike.unlike,
              })
            }
          >
            {buttonsLike.unlike ? <AiFillDislike /> : <AiOutlineDislike />}
            <span>Não gostei</span>
          </GeralButton>

          <CommentsCounter
            onClick={() => setCommentsList(!commentsList)}
            className="interactions__comments-counter"
          >
            {comments.length === 0
              ? "Nenhum Comentário"
              : comments.length === 1
              ? "Um Comentário"
              : `${comments.length} Comentários`}
          </CommentsCounter>
        </Interactions>

        <ContainerComments className="comments" modalOn={commentsList}>
          <Form
            onSubmit={handleSubmit(handleSubmitComment)}
            className="form-comments"
          >
            <Label className="label-add-comment">
              <TextArea
                className="label-add-comment__comment"
                placeholder="Adicionar Comentário"
                {...register("comment")}
              />

              <GeralButton type="submit">
                <IoMdSend />
              </GeralButton>
            </Label>
          </Form>

          <Comments className="comments-list">
            {comments &&
              comments.map((comment, index) => (
                <li key={index}>
                  <h3
                    onClick={() => handleProfileUser(comment.userId, history)}
                  >
                    {comment.nickname}
                  </h3>
                  <p>{comment.comment}</p>
                </li>
              ))}
          </Comments>
        </ContainerComments>
      </Footer>
    </Container>
  );
};

export default CardFeed;
