import { Container } from "./style";

const GeralButton = ({ bgcolor, children }) => {
  return (
    <>
      <Container bgcolor={bgcolor}>{children}</Container>
    </>
  );
};
export default GeralButton;
