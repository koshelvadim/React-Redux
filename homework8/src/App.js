import "./style/style.scss";
// библиотека для метаданных head
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import CatalogPage from "./components/CatalogPage";
import RegistrationPage from "./components/RegistrationPage";
import BasketPage from "./components/BasketPage";


function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<BasketPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;