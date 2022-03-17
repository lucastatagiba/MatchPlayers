const ListCard = ({ cardlist }) => {
  return (
    <ul>
      {cardlist.map((post) => (
        <li key={post.id} post={post} /> //ai ser o component card no lugaar da li
      ))}
    </ul>
  );
};
export default ListCard;
