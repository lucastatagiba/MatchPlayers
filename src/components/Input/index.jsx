import { Container, ContainerModal } from "./style";

const Input = ({
  bgcolor,
  width,
  height,
  color,
  bdradius,
  placeholder,
  Icon,
  border = true,
  ...rest
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
        <input placeholder={placeholder} {...rest} />
        <Icon />
        {/* <ContainerModal></ContainerModal> */}
      </Container>
    </>
  );
};
export default Input;
