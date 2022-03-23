//STYLES
import { Container, Image, Name } from "./style";

const CardGames = ({ image, name, size }) => {
  return (
    <Container className="cardgames" size={size}>
      <Image
        className="cardgames__game__image"
        src={image}
        alt={`Jogo ${name}`}
      />

      <Name className="cardgames__game__name" size={size}>
        {name}
      </Name>
    </Container>
  );
};
export default CardGames;
