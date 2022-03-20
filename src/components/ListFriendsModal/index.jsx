import { useContext } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

import { UserDataContext } from "../../providers/userData";
import { Container } from "./style";

const ListFriendsModal = ({ listFriends, modalClose }) => {
  const { handleProfileUser } = useContext(UserDataContext);

  const history = useHistory();

  return (
    <Container>
      <RiCloseCircleFill onClick={() => modalClose(false)} />
      <h3>Lista de Amigos</h3>
      {listFriends.map((friend) => (
        <li
          key={friend.userId}
          onClick={() => handleProfileUser(friend.userId, history)}
        >
          <img alt="userPhoto" src={friend.profileIMG} />
          <h2>{friend.name}</h2>
        </li>
      ))}
    </Container>
  );
};
export default ListFriendsModal;
