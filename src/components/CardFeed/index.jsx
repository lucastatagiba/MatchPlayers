import { useContext } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import moment from "moment";
import "moment/locale/pt";

import { PostListContext } from "../../providers/posts";
import GeralButton from "../GeneralButton";
import { Container, Box } from "./style";

const CardFeed = ({
  profileIMG,
  username,
  desc,
  createdAt,
  idPost,
  userId,
}) => {
  const { handleDeletePost, userData } = useContext(PostListContext);
  console.log(userData);
  return (
    <>
      <Container>
        {userId === userData.userId ? (
          <CgCloseR onClick={() => handleDeletePost(idPost)} />
        ) : (
          <></>
        )}
        <Box className="userInformation">
          <img className="userPhoto" src={profileIMG} alt="userPhoto" />
          <div className="userName">
            <h3>{username}</h3>
            <span>{moment(createdAt).locale("pt").fromNow()}</span>
          </div>
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
        </Box>
        <div className="postContent">
          <p className="postText">{desc}</p>
          <div className="imageBox">
            <img
              className="postImage"
              src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/07/28/Photos/Processed/fifagame-krQ--621x414@LiveMint.jpg"
              alt="postImage"
            />
          </div>
        </div>

        <Box className="likes">
          <div>
            <AiOutlineLike />
            <span>Gostei</span>
            <AiOutlineDislike />
            <span>Não gostei</span>
          </div>
          <div>
            <span>Comentários</span>
          </div>
        </Box>
        <GeralButton>
          <MdMessage /> Adicionar Comentário
        </GeralButton>
      </Container>
    </>
  );
};
export default CardFeed;
