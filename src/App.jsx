import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePageUnlloged from "./pages/HomePageUnlogged/HomePageUnlogged";
import GlobalStyle from "./style/resetCSS";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyleApp>
        <Routes>
          <Route path="/" element={<HomePageUnlloged />} />
          {/* <Route path="/signup" element={}/> */}
          {/* <Route path="/signin" element={}/>
      <Route path="/ranking" element={}/> */}
        </Routes>
      </StyleApp>
    </BrowserRouter>
  );
}

export default App;

const StyleApp = styled.body`
  background-color: deeppink;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
