import { Link } from "react-router-dom";
import { Container } from "./style.js";

const CardNews = ({ title, desc, imgNews, urlNews }) => {
  return (
    <Container href={urlNews}>
      <div className="info--news">
        <img
          src="https://st.depositphotos.com/1016545/4532/i/450/depositphotos_45321779-stock-photo-letters-in-fire-letter-n.jpg"
          alt="News"
        />
        <h4>{title}</h4>
      </div>
      <div className="desc--news">
        {imgNews && <img src={imgNews} alt="News" />}
        <p>{desc}</p>
      </div>
    </Container>
  );
};

export default CardNews;
