import { useContext } from "react";

import { PostListContext } from "../../providers/posts";
import CardNews from "../CardNews";
import { Container } from "./style";

const ListNews = () => {
  const { listNews } = useContext(PostListContext);

  return (
    <Container>
      {listNews.map((news, index) => {
        return (
          <CardNews
            urlNews={news.link}
            title={news.title}
            desc={news.summary}
            imgNews={news.media}
            key={index}
          />
        );
      })}
    </Container>
  );
};

export default ListNews;
