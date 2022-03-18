import CardFeed from "../CardFeed";

const ListCard = ({ postList }) => {
  return (
    <ul>
      {postList.map((post) => (
        <CardFeed username={post.username} desc={post.desc} /> //ai ser o component card no lugaar da li
      ))}
    </ul>
  );
};
export default ListCard;
