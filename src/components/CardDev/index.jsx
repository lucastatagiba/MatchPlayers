import * as styles from "./style";

const CardDev = ({ Dev }) => {
  return (
    <styles.ContainerDev>
      <styles.liDev>
        <styles.NameDev> {Dev.nome}</styles.NameDev>
        <styles.ImageDev src={Dev.img} alt="img" />
        <styles.funcaoDev>{Dev.funcao}</styles.funcaoDev>
      </styles.liDev>
    </styles.ContainerDev>
  );
};

export default CardDev;
