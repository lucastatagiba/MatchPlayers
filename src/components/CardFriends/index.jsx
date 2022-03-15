import { RiMessage2Line } from "react-icons/ri";

import * as styles from "./index";

const CardFriends = ({ image, name }) => {
  return (
    <styles.Container>
      <styles.Image src={image} alt={`Pessoa ${name}`} />

      <styles.Name>{name}</styles.Name>

      <RiMessage2Line />
    </styles.Container>
  );
};

export default CardFriends;
