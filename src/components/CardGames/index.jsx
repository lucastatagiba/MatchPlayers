import * as styles from "./index";

const CardGames = ({ image, name }) => {
  return (
    <styles.Container>
      <styles.Image src={image} alt={`Jogo ${name}`} />

      <styles.Name>{name}</styles.Name>
    </styles.Container>
  );
};
export default CardGames;
