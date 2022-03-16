import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PostListProvider } from "./providers/posts";
import { UserDataProvider } from "./providers/userData";

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <PostListProvider>
        <App />
      </PostListProvider>
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
