//EXTERNAL DEPENDENCIES
import { useContext } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

//INTERNAL DEPENDENCIES
import { UserDataContext } from "../../providers/userData";

//STYLES
import { Container, Text, ListItem, Image } from "./style";

const ListFriendsModal = ({ listFriends, modalClose }) => {
  const { handleProfileUser } = useContext(UserDataContext);

  const history = useHistory();

  return (
    <Container className="friendslist">
      <RiCloseCircleFill onClick={() => modalClose(false)} />
      <Text className="friendslist__title">Lista de Amigos</Text>
      {listFriends.map((friend) => (
        <ListItem
          key={friend.userId}
          onClick={() => handleProfileUser(friend.userId, history)}
        >
          <Image
            className="friendslist__userphoto"
            alt="userPhoto"
            src={friend.profileIMG}
          />
          <Text className="friendslist__friendname">{friend.name}</Text>
        </ListItem>
      ))}
    </Container>
  );
};
export default ListFriendsModal;
