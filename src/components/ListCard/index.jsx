import CardFeed from "../CardFeed";
import { Container } from "./style";

const ListCard = ({ postList }) => {
  return (
    <Container>
      {postList.map((post) => (
        <CardFeed
          username={post.username}
          profileIMG={post.profileIMG}
          desc={post.desc}
          createdAt={post.createdAt}
          key={post.id}
        />
      ))}
    </Container>
  );
};
export default ListCard;
