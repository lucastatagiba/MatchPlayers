import CardFeed from "../CardFeed";

const ListCard = ({ cardlist }) => {
  return (
    <ul>
      {cardlist.map((post) => (
        <CardFeed nickname={post.nickname} /> //ai ser o component card no lugaar da li
      ))}
    </ul>
  );
};
export default ListCard;
