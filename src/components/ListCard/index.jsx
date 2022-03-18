import CardFeed from "../CardFeed";
import { Container } from "./style";

const ListCard = ({ postList }) => {
  console.log(postList);
  return (
    <Container>
      {postList.map((post) => (
        <CardFeed
          username={post.username}
          profileIMG={post.profileIMG}
          desc={post.desc}
          createdAt={post.createdAt}
          key={post.id}
          idPost={post.id}
          userId={post.userId}
        />
      ))}
    </Container>
  );
};
export default ListCard;
