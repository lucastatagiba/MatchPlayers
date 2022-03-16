import { Container } from "./style";

const GeralButton = ({ bgcolor, children, color, bdradius, width, height }) => {
  return (
    <>
      <Container
        bgcolor={bgcolor}
        color={color}
        bdradius={bdradius}
        width={width}
        height={height}
      >
        {children}
      </Container>
    </>
  );
};
export default GeralButton;
