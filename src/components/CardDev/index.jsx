//EXTERNAL DEPENDENCIES
import { AiFillLinkedin } from "react-icons/ai";

//INTERNAL DEPENDENCIES

//STYLES
import {
  Container,
  CardContainer,
  BoxContainer,
  ImageContainer,
  Image,
  ContentContainer,
  Link,
  Name,
  Role,
} from "./style";

const CardDev = ({ developer }) => {
  return (
    <Container>
      <CardContainer className="card-container">
        <BoxContainer className="box-container">
          <ImageContainer className="image-container">
            <Image
              className="image-container__image"
              src={developer.image}
              alt=""
            />
          </ImageContainer>

          <ContentContainer className="content-container">
            <Link
              to={{
                pathname: developer.linkedin,
              }}
              rel="noreferrer noopener external"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>

            <Name className="content-container__name">{developer.name}</Name>

            <Role className="content-container__role"> {developer.role}</Role>
          </ContentContainer>
        </BoxContainer>
      </CardContainer>
    </Container>
  );
};

export default CardDev;
