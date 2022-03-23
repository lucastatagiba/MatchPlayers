import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PostListProvider } from "./providers/posts";
import { UserDataProvider } from "./providers/userData";
import { GamesProvider } from "./providers/games";

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <GamesProvider>
        <PostListProvider>
          <App />
        </PostListProvider>
      </GamesProvider>
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
