import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { UserContext } from "./contexts/UserContext";
import HomePageUnlloged from "./pages/HomePageUnlogged/HomePageUnlogged";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GlobalStyle from "./style/resetCSS";

function App() {
  const [user, setUser] = useState(sessionStorage.getItem("tokenLocal"));

  console.log("aqui mano brow")
  console.log(user)

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <StyleApp>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <GlobalStyle />
          <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Logo />
          <Routes>
            <Route path="/" element={<HomePageUnlloged />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            {/* <Route path="/ranking" element={}/> */}
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div`
  background-color: #54c764;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #215228;
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
