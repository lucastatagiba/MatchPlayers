import { Container, ContainerModal } from "./style";
import { useContext } from "react";
import { UserDataContext } from "../../providers/userData";
import { useHistory } from "react-router-dom";
import { GamesContext } from "../../providers/games";
import CardGames from "../CardGames";

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
  const { searchUser, handleProfileUser, userProfile } =
    useContext(UserDataContext);
  const history = useHistory();
  const { games } = useContext(GamesContext);

  console.log(games);
  console.log(userProfile);
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
                      <div className="gameModaList">
                        {games
                          .filter((game) =>
                            userProfile.gameList.includes(game.name)
                          )
                          .map((game) => {
                            return (
                              <CardGames key={game.name} image={game.image} />
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
