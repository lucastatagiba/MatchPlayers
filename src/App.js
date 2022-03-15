import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./Routes";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
