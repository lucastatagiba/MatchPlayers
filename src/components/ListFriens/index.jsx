import { useState } from "react";
import CardFriends from "../CardFriends";

const ListFriens = ({ cardlist }) => {
  const newCardList = cardlist.slice(0, 5);

  const [listUsed, setlistUsed] = useState(newCardList);

  return (
    <div>
      <ul>
        {listUsed.map((index, image, pessoa) => (
          <CardFriends key={index} image={image} pessoa={pessoa} />
        ))}
      </ul>
      <button onClick={setlistUsed(cardlist)}>Ver Todos</button>
    </div>
  );
};
export default ListFriens;
