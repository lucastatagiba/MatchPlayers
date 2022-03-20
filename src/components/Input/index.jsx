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
  display,
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
        <ContainerModal display={display}>
          <h3>Resultados:</h3>
          <div>
            {[1, 2, 3, 4, 5].map((personSearch) => {
              return (
                <div>
                  <img
                    alt="personIMG"
                    src={personSearch.img && personSearch.img}
                  />
                  <div>
                    <h2>personSearch</h2>
                    <div>
                      {/* {personSearch.jogos.map((jogo) => {
                        return <div>iconeJogo</div>;
                      })} */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ContainerModal>
      </Container>
    </>
  );
};
export default Input;
