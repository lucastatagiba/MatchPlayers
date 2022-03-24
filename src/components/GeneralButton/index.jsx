import { Container } from "./style";

const GeralButton = ({
  bgcolor,
  children,
  color,
  bdradius,
  width,
  height,
  onClick,
  ...rest
}) => {
  return (
    <>
      <Container
        bgcolor={bgcolor}
        color={color}
        bdradius={bdradius}
        width={width}
        height={height}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Container>
    </>
  );
};
export default GeralButton;
