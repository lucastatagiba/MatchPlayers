import { TextField, Button } from "@mui/material";

import { Container } from "./style";

const LandingPage = () => {
  return (
    <>
      <Container>
        <div>
          <form>
            <div>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                fullWidth
                type="password"
                id="outlined-basic"
                label="Senha"
                variant="outlined"
              />
            </div>
            <Button variant="contained">Entrar</Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
