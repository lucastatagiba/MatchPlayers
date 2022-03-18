import { Container, Box } from "./style";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import GeralButton from "../GeneralButton";

const CardFeed = ({ profileIMG, username, desc }) => {
  return (
    <>
      <Container>
        <Box className="userInformation">
          <img
            className="userPhoto"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEibJeZALawbw/profile-displayphoto-shrink_100_100/0/1610116021938?e=1652918400&v=beta&t=jMpRwH_Y0PpuAb-4eBRPPvQDtAnRWgB39ekW4uauaZM"
            alt="userPhoto"
          />
          <div className="userName">
            <h3>{username}</h3>
            <span>20 h</span>
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
