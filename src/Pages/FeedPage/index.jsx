import CardFeed from "../../components/CardFeed";
import GeralButton from "../../components/GeneralButton";
import Header from "../../components/Header";
import { Container } from "./style";
import UserImg from "../../Assets/img/Praia1_140220.jpg";
import { useState } from "react";
const FeedPage = ({
  gamelist,
  disponibilidadeHorario,
  postList,
  friendList,
}) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );

  return (
    <>
      <Header />
      <Container>
        <aside className="leftAside">
          <div className="divProfile">
            <img alt="userPhoto" src={userData.profileIMG} />
            <h2>{userData.nickname}</h2>
            {/* <ul>
              {gamelist.map((game) => (
                <li> {game}</li>
              ))}
            </ul> */}
          </div>
          <div className="divSchedules">
            <h3>Disponibilidade de Horários</h3>
            <span>
              {/* {`${disponibilidadeHorario[0]} ~ ${disponibilidadeHorario[1]}`} */}
            </span>
          </div>
        </aside>
        <section>
          <div className="divButtonsFeed">
            <div>
              <GeralButton>Todos</GeralButton>
              <GeralButton>Jogos</GeralButton>
              <GeralButton width={60}>Notícias</GeralButton>
            </div>
            <select>
              <option value="all"> Todos </option>
              <option value="justFriends"> Somente amigos </option>
            </select>
          </div>
          <div className="divStartPub">
            <img alt="UserPhoto" src="" />
            <div className="containPubDiv">
              <div className="startPub"> Começar publicação</div>
              <div className="buttonPubDiv">
                <GeralButton> Foto </GeralButton>
                <GeralButton> Publicar </GeralButton>
              </div>
            </div>
          </div>
          {/* <ul>
            {postList.map((post) => (
              <li>{<CardFeed />}</li>
            ))}
          </ul> */}
        </section>
        <aside className="rightAside">
          {/* <ul>
            {friendList.map((friend) => (
              <li>
                <img alt="userPhoto" src={friend.photo} />
                <h2>{friend.name}</h2>
              </li>
            ))}
          </ul> */}
          <h2>Ver Todos</h2>
        </aside>
      </Container>
    </>
  );
};
export default FeedPage;
