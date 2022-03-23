import { Container, Image, Text } from "./style.js";

const CardNews = ({ title, desc, imgNews, urlNews }) => {
  return (
    <Container className="news" href={urlNews}>
      <Container className="cardnews">
        <Image
          className="cardnews__logo"
          src="https://st.depositphotos.com/1016545/4532/i/450/depositphotos_45321779-stock-photo-letters-in-fire-letter-n.jpg"
          alt="News"
        />
        <Text className="cardnews__title">{title}</Text>
      </Container>
      <Container className="cardnews__content">
        {imgNews && (
          <Image className="cardnews__photo" src={imgNews} alt="News" />
        )}
        <Text className="cardnews__description">{desc}</Text>
      </Container>
    </Container>
  );
};

export default CardNews;
