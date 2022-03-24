import { RiMessage2Line } from "react-icons/ri";

import { Container, Image, Name } from "./style";

const CardFriends = ({ image, name, ...rest }) => {
  return (
    <Container className="cardfriends" {...rest}>
      <Image
        className="cardfriends__image"
        src={image}
        alt={`Pessoa ${name}`}
      />

      <Name className="cardfriends__name">{name}</Name>

      <RiMessage2Line />
    </Container>
  );
};

export default CardFriends;
