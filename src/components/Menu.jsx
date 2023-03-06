import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

export default function Menu({ openMenu, setOpenMenu }) {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function openSignIn() {
    setOpenMenu(false);
    navigate("/sign-in");
  }

  function openSignUp() {
    setOpenMenu(false);
    navigate("/sign-up");
  }

  function openHome() {
    setOpenMenu(false);
    navigate("/");
  }

  function openRanking() {
    setOpenMenu(false);
    navigate("/ranking");
  }

  function logout() {
    setUser(null)
    sessionStorage.clear();
    setOpenMenu(false);
    navigate("/");
  }

  return (
    <MenuContainer openMenu={openMenu} user={user}>
      <a id="in" className="notLogged" onClick={openSignIn}>
        <h2>Sign in!</h2>
      </a>
      <a id="up" className="notLogged" onClick={openSignUp}>
        <h2>Sign up!</h2>
      </a>

      <a id="home" className="logged" onClick={openHome}>
        <h2>Home</h2>
      </a>

      <a id="home" className="logged" onClick={openRanking}>
        <h2>Ranking</h2>
      </a>

      <a id="logout" className="logged" onClick={logout}>
        <h2>Logout</h2>
      </a>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: #54c764;
  position: fixed;
  overflow: hidden;
  top: ${(props) => (props.openMenu ? "0" : "-100vh")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  transition: top 0.4s ease-in-out;

  a {
    margin: 1rem;
    border: 1px solid;
    border-radius: 1rem;
    padding: 1rem;
  }

  a#up,
  a#logout {
    background-color: #215228;
    color: #54c764;
  }

  a#in {
    background-color: #54c764;
    color: #215228;
  }

  a.notLogged {
    display: ${({ user }) => (user ? "none" : "flex")};
  }

  a.logged {
    display: ${({ user }) => (!user ? "none" : "flex")};
  }
`;
