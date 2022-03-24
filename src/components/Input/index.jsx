//EXTERNAL DEPENDENCIES
import { useContext } from "react";
import { useHistory } from "react-router-dom";

//INTERNAL DEPENDENCIES
import { UserDataContext } from "../../providers/user/userData";
import { GamesContext } from "../../providers/games/games";
import CardGames from "../CardGames";

//STYLES
import {
  Container,
  SearchInput,
  ContainerUl,
  ContainerLi,
  Image,
  Text,
} from "./style";

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

  return (
    <>
      <Container
        className="input"
        bgcolor={bgcolor}
        width={width}
        color={color}
        bdradius={bdradius}
        height={height}
        border={border}
      >
        <SearchInput placeholder={placeholder} {...rest} />

        <Icon />
        <Container className="results" display={display}>
          <ContainerUl>
            {!!searchUser &&
              searchUser.map((personSearch) => {
                return (
                  <ContainerLi
                    className="results__usercard"
                    key={personSearch.userId}
                  >
                    <Image
                      className="usercard__userphoto"
                      alt="personIMG"
                      src={personSearch.profileIMG && personSearch.profileIMG}
                      onClick={() =>
                        handleProfileUser(personSearch.id, history)
                      }
                    />
                    <Container className="usercard__userinformation">
                      <Text
                        onClick={() =>
                          handleProfileUser(personSearch.id, history)
                        }
                      >
                        {personSearch.name}
                      </Text>
                      <Container className="usercard__usergames">
                        {games
                          .filter((game) =>
                            userProfile.gameList.includes(game.name)
                          )
                          .map((game) => {
                            return (
                              <CardGames key={game.name} image={game.image} />
                            );
                          })}
                      </Container>
                    </Container>
                  </ContainerLi>
                );
              })}
          </ContainerUl>
        </Container>
      </Container>
    </>
  );
};
export default Input;
