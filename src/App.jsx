import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Logo from "./components/Logo";
import HomePageUnlloged from "./pages/HomePageUnlogged/HomePageUnlogged";
import GlobalStyle from "./style/resetCSS";

function App() {
  return (
    <StyleApp>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<HomePageUnlloged />} />
          {/* <Route path="/signup" element={}/> */}
          {/* <Route path="/signin" element={}/>
      <Route path="/ranking" element={}/> */}
        </Routes>
      </BrowserRouter>
    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div`
  background-color: deeppink;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.875rem;
  font-family: "Lexend Deca", sans-serif;
`;
