import { Container } from "./style";

const Input = ({
  bgcolor,
  width,
  height,
  color,
  bdradius,
  placeholder,
  icon,
}) => {
  return (
    <>
      <Container
        bgcolor={bgcolor}
        width={width}
        color={color}
        bdradius={bdradius}
        placeholder={placeholder}
        icon={icon}
        height={height}
      ></Container>
    </>
  );
};
export default Input;
