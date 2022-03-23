import * as styles from "./style";

const CardGames = ({ image, name, size }) => {
  return (
    <styles.Container size={size}>
      <styles.Image src={image} alt={`Jogo ${name}`} />

      <styles.Name size={size}>{name}</styles.Name>
    </styles.Container>
  );
};
export default CardGames;
