import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Menu({ openMenu, setOpenMenu }) {
  
  const navigate = useNavigate()

  function openSignIn() {
    setOpenMenu(false)
    navigate("/sign-in")
  }

  function openSignUp() {
    setOpenMenu(false)
    navigate("/sign-up")
  }
  
  
  return (
    <MenuContainer openMenu={openMenu}>

        <a id="in" onClick={openSignIn}>
          <h2 >Sign in!</h2>
        </a>
        <a id="up" onClick={openSignUp}>
          <h2>Sign up!</h2>
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
  /* height: ${(props) => (props.openMenu ? "100vh" : "0vh")}; */
  /* display: ${(props) => (props.openMenu ? "flex" : "none")}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  transition: top 0.4s ease-in-out;


  a{
    margin: 1rem;
    border: 1px solid;
    border-radius: 1rem;
    padding: 1rem;
  }

  a#up {
    background-color: #215228;
    color: #54c764;
  }

  a#in {
   background-color: #54c764;
   color: #215228;
  }
`;
