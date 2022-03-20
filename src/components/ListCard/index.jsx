import { useContext } from "react";
import { UserDataContext } from "../../providers/userData";
import CardFeed from "../CardFeed";
import { Container } from "./style";

const ListCard = ({ postList }) => {
  const { userData } = useContext(UserDataContext);
  return (
    <Container>
      {postList.map((post) => {
        if (post.userId !== userData.id) {
          return (
            <CardFeed
              username={post.username}
              profileIMG={post.profileIMG}
              desc={post.desc}
              createdAt={post.createdAt}
              key={post.id}
              idPost={post.id}
              userId={post.userId}
              postUpdate={false}
              postIMG={post.postIMG || ""}
            />
          );
        } else {
          return (
            <CardFeed
              username={post.username}
              profileIMG={post.profileIMG}
              desc={post.desc}
              createdAt={post.createdAt}
              key={post.id}
              idPost={post.id}
              userId={post.userId}
              postUpdate={true}
              postIMG={post.postIMG || ""}
            />
          );
        }
      })}
    </Container>
  );
};
export default ListCard;
