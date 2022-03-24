import { GamesProvider } from "./games/games";
import { PostListProvider } from "./posts/posts";
import { UserDataProvider } from "./user/userData";

const Provider = ({ children }) => {
  return (
    <UserDataProvider>
      <PostListProvider>
        <GamesProvider>{children}</GamesProvider>
      </PostListProvider>
    </UserDataProvider>
  );
};

export default Provider;
