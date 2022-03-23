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
import { PostListContext } from "../../providers/posts";
import { UserDataContext } from "../../providers/userData";
import { GamesContext } from "../../providers/games";
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
  CommentsCount,
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

  const { handleProfileUser } = useContext(UserDataContext);
  const { handleDeletePost, handleCommentPost } = useContext(PostListContext);
  const { register, handleSubmit } = useForm();
  const [buttonsLike, setButtonsLike] = useState({
    like: false,
    unlike: false,
  });
  const [commentsList, setCommentsList] = useState(false);

  const handleSubmitComment = (data) => {
    setCommentsList(true);

    const newListComments = { comments: [...comments, data.comment] };

    handleCommentPost(newListComments, idPost);
  };

  return (
    <Container>
      <Header className="userInformation">
        <Photo
          className="userPhoto"
          src={profileIMG}
          alt={`Usuário ${username}`}
          onClick={() => handleProfileUser(userId, history)}
        />

        <InfoContainer className="userName">
          <Name onClick={() => handleProfileUser(userId, history)}>
            {username}
          </Name>

          <Moment pubdate dateTime={createdAt}>
            {moment(createdAt).locale("pt").fromNow()}
          </Moment>
        </InfoContainer>

        {gameList && (
          <GamesList className="gameContent">
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
            className="deletePost"
            onClick={() => handleDeletePost(idPost)}
          >
            <IoMdTrash />
          </TrashButton>
        )}
      </Header>

      <Body className="postContent">
        <TextContent className="postText">{desc}</TextContent>

        <ImageContainer className="imageBox">
          {postIMG && (
            <Image
              className="postImage"
              src={postIMG}
              alt="Imagem da Publicação"
            />
          )}
        </ImageContainer>
      </Body>

      <Footer className="likes">
        <Interactions>
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

          <CommentsCount
            onClick={() => setCommentsList(!commentsList)}
            className="button--comments"
          >
            {comments.length === 0
              ? "Nenhum Comentário"
              : comments.length === 1
              ? "Um Comentário"
              : `${comments.length} Comentários`}
          </CommentsCount>
        </Interactions>

        <ContainerComments>
          <Form
            onSubmit={handleSubmit(handleSubmitComment)}
            className="form--comments"
          >
            <Label>
              <TextArea
                placeholder="Adicionar Comentário"
                {...register("comment")}
              />

              <GeralButton type="Submit">
                <IoMdSend />
              </GeralButton>
            </Label>
          </Form>

          <Comments modalOn={commentsList}>
            {comments &&
              comments.map((comment, index) => <li key={index}>{comment}</li>)}
          </Comments>
        </ContainerComments>
      </Footer>
    </Container>
  );
};

export default CardFeed;
