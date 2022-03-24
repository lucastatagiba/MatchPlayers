import { useContext, useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Label } from "./style";
import { GamesContext } from "../../providers/games/games";
import { UserDataContext } from "../../providers/user/userData";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectGames = () => {
  const [gamesNames, setGamesNames] = useState([]);

  const { games } = useContext(GamesContext);
  const {
    userData: { gameList },
    setUserGames,
  } = useContext(UserDataContext);

  useEffect(() => setGamesNames(gameList), []);

  const options = games.map((game) => game.name);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGamesNames(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => setUserGames(gamesNames), [gamesNames]);

  return (
    <FormControl sx={{ width: 300 }}>
      <Label id="demo-multiple-checkbox-label" className="change--position">
        Selecione seus jogos
      </Label>
      <Select
        fullWidth
        size="small"
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={gamesNames}
        onChange={handleChange}
        input={<OutlinedInput label="Selecione seus jogos" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={gamesNames.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectGames;
