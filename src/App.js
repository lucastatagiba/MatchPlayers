//EXTERNAL DEPENDENCIES
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//INTERNAL DEPENDENCIES
import Routes from "./routes";

//STYLES
import { Reset, RootVariables, GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <Reset />
      <RootVariables />
      <GlobalStyles />

      <ToastContainer style={{ padding: "15px", zIndex: 99999 }} />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
