import { useState } from "react";
import { BsCardImage } from "react-icons/bs";

import Header from "../../components/Header";
import CardFeed from "../../components/CardFeed";
import GeralButton from "../../components/GeneralButton";
import { Container } from "./style";
import ListCard from "../../components/ListCard";

const FeedPage = ({
  gamelist,
  disponibilidadeHorario,
  postList,
  friendList,
}) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("@matchplayers-userData")) || []
  );
  console.log(userData);

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
              <GeralButton>Notícias</GeralButton>
            </div>
            <select>
              <option value="all"> Todos </option>
              <option value="justFriends"> Somente amigos </option>
            </select>
          </div>
          <div className="divStartPub">
            <img alt="UserPhoto" src={userData.profileIMG} />
            <div className="containPubDiv">
              <GeralButton bgcolor={"#F3F2EF"} width={"95%"} color={"#6C8394"}>
                Começar Publicação
              </GeralButton>
              <div className="buttonPubDiv">
                <GeralButton>
                  <BsCardImage />
                  Foto
                </GeralButton>
                <GeralButton> Publicar </GeralButton>
              </div>
            </div>
          </div>
          <ListCard
            cardlist={[
              {
                nickname: "Lucas Giba",
                profileIMG: "url",
                plataformList: [],
                postIMG: "img",
                desc: "aqui entra o que a pessoa postou",
                comments: [],
                userId: 2,
              },
              {
                nickname: "Lucas Giba2",
                profileIMG: "url",
                plataformList: [],
                postIMG: "img",
                desc: "aqui entra o que a pessoa postou",
                comments: [],
                userId: 2,
              },
            ]}
          ></ListCard>
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
