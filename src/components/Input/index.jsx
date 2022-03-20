import { Container, ContainerModal } from "./style";
import { useContext } from "react";
import { UserDataContext } from "../../providers/userData";
import { useHistory } from "react-router-dom";

const Input = ({
  bgcolor,
  width,
  height,
  color,
  bdradius,
  placeholder,
  Icon,
  border = true,
  display,
  ...rest
}) => {
  const { searchUser, handleProfileUser } = useContext(UserDataContext);
  const history = useHistory();
  return (
    <>
      <Container
        bgcolor={bgcolor}
        width={width}
        color={color}
        bdradius={bdradius}
        height={height}
        border={border}
      >
        <input placeholder={placeholder} {...rest} />

        <Icon />
        <ContainerModal display={display}>
          <h3>Resultados:</h3>
          <ul>
            {!!searchUser &&
              searchUser.map((personSearch) => {
                return (
                  <li key={personSearch.userId}>
                    <img
                      alt="personIMG"
                      src={personSearch.profileIMG && personSearch.profileIMG}
                      onClick={() =>
                        handleProfileUser(personSearch.id, history)
                      }
                    />
                    <div className="div--games">
                      <h2
                        onClick={() =>
                          handleProfileUser(personSearch.id, history)
                        }
                      >
                        {personSearch.name}
                      </h2>
                      <div>
                        {personSearch.gameList.map((jogo) => {
                          return (
                            <img
                              src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
                              alt="GameLogo"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </ContainerModal>
      </Container>
    </>
  );
};
export default Input;
