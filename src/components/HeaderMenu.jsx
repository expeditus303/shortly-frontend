import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiXCircle } from "react-icons/fi";

export default function HeaderMenu({ openMenu, setOpenMenu }) {
  return (


    <>
      <HeaderMenuContainer openMenu={openMenu}>
        <div id="openMenu">
          <FiMenu onClick={() => setOpenMenu(true)}/>
        </div>

        <div id="closeMenu">
          <FiXCircle onClick={() => setOpenMenu(false)}/>
        </div>
      </HeaderMenuContainer>
    </>
  );
}

const HeaderMenuContainer = styled.div`
  background-color: #54c764;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  padding: 0.7rem;
  font-size: 2rem;
  color: #215228e0;

  a {
    margin: 1rem;
  }

  div#openMenu {
    display: ${(props) => (!props.openMenu ? "block" : "none")};
  }

  div#closeMenu {
    display: ${(props) => (props.openMenu ? "block" : "none")};
  }
`;
