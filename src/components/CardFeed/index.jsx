import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
import { useForm } from "react-hook-form";
import moment from "moment";
import "moment/locale/pt";

import { PostListContext } from "../../providers/posts";
import GeralButton from "../GeneralButton";
import { Container, Box } from "./style";
import { UserDataContext } from "../../providers/userData";

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
}) => {
  const { handleProfileUser } = useContext(UserDataContext);
  const { handleDeletePost, handleCommentPost } = useContext(PostListContext);
  const { register, handleSubmit } = useForm();
  const [buttonsLike, setButtonsLike] = useState({
    like: false,
    unlike: false,
  });
  const history = useHistory();

  const handleSubmitComment = (data) => {
    const newListComments = { comments: [...comments, data.comment] };
    handleCommentPost(newListComments, idPost);
  };

  return (
    <>
      <Container>
        {postUpdate && (
          <CgCloseR
            className="deletePost"
            onClick={() => handleDeletePost(idPost)}
          />
        )}
        <div className="gameContent">
          <div className="game">
            <img
              className="gameLogo"
              src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
              alt="gameLogo"
            />
            <span className="gameName">Call of Duty</span>
          </div>
          <div className="game">
            <img
              className="gameLogo"
              src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
              alt="gameLogo"
            />
            <span className="gameName">Lol</span>
          </div>
          <div className="game">
            <img
              className="gameLogo"
              src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
              alt="gameLogo"
            />
            <span className="gameName">PUBG</span>
          </div>
          <div className="game">
            <img
              className="gameLogo"
              src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
              alt="gameLogo"
            />
            <span className="gameName">Valorant</span>
          </div>
          <div className="game">
            <img
              className="gameLogo"
              src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
              alt="gameLogo"
            />
            <span className="gameName">Counter-strike</span>
          </div>
        </div>
        <Box className="userInformation">
          <img
            className="userPhoto"
            src={profileIMG}
            alt="userPhoto"
            onClick={() => handleProfileUser(userId, history)}
          />
          <div className="userName">
            <h3 onClick={() => handleProfileUser(userId, history)}>
              {username}
            </h3>
            <span>{moment(createdAt).locale("pt").fromNow()}</span>
          </div>
        </Box>
        <div className="postContent">
          <p className="postText">{desc}</p>
          <div className="imageBox">
            {postIMG && (
              <img
                className="postImage"
                src={postIMG}
                alt="Imagem da Publicação"
              />
            )}
          </div>
        </div>

        <Box className="likes">
          <div>
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
          </div>
          <div>
            <span>Comentários</span>
          </div>
        </Box>
        <form
          onSubmit={handleSubmit(handleSubmitComment)}
          className="form--comments"
        >
          <input placeholder="Adicionar Comentário" {...register("comment")} />
          <GeralButton type="Submit">
            <IoMdSend />
          </GeralButton>
        </form>
        <ul className="comments--list">
          {comments &&
            comments.map((comment, index) => <li key={index}>{comment}</li>)}
        </ul>
      </Container>
    </>
  );
};
export default CardFeed;
