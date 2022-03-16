import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./Routes";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
