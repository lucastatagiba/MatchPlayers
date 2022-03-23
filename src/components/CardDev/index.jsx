import * as styles from "./style";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardDev = ({ Dev }) => {
  const style = { color: "#0072b1" };

  return (
    <styles.ContainerDev>
      <div className="container">
        <div className="box">
          <div className="imgBox">
            <img src={Dev.img} alt="" />
          </div>
          <div className="content">
            <Link
              to={{
                pathname: Dev.linkedin,
              }}
              target="_blank"
            >
              <AiFillLinkedin style={style} />
            </Link>

            <h2>
              {Dev.nome}
              <span> {Dev.funcao}</span>
            </h2>
          </div>
        </div>
      </div>
    </styles.ContainerDev>
  );
};

export default CardDev;
