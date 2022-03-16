import { Container } from "./style";

const Input = ({
  bgcolor,
  width,
  height,
  color,
  bdradius,
  placeholder,
  Icon,
  border = true,
}) => {
  return (
    <>
      <Container
        bgcolor={bgcolor}
        width={width}
        color={color}
        bdradius={bdradius}
        height={height}
        border={border}
      >
        <input placeholder={placeholder} />
        <Icon />
      </Container>
    </>
  );
};
export default Input;
