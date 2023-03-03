import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "./components/Logo";
import HomePageUnlloged from "./pages/HomePageUnlogged/HomePageUnlogged";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GlobalStyle from "./style/resetCSS";

function App() {
  return (
    <StyleApp>
      <BrowserRouter>
        <GlobalStyle />
        <HeaderMenu />
        <Logo />
        <Routes>
          <Route path="/" element={<HomePageUnlloged />} />
          <Route path="/sign-up" element={<SignUpPage />}/>
          {/* <Route path="/signin" element={}/>
      <Route path="/ranking" element={}/> */}
        </Routes>
      </BrowserRouter>
    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div`
  background-color: #54c764;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.875rem;
  font-family: "Lexend Deca", sans-serif;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: pointer;
  }
`;
