import * as styles from "./style";

const CardGames = ({ image, name, display }) => {
  return (
    <styles.Container>
      <styles.Image src={image} alt={`Jogo ${name}`} />

      <styles.Name display={display}>{name}</styles.Name>
    </styles.Container>
  );
};
export default CardGames;
