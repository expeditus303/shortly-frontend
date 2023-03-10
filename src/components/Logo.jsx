import { Link } from "react-router-dom";
import styled from "styled-components";
import shortlyLogo from "../assets/shortlyLogo.png";
import { FiMenu } from "react-icons/fi";

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <h1>Shortly</h1>
        <img src={shortlyLogo} alt="" />
      </Link>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`

  margin: 5rem 0rem 2rem;

  font-size: 4rem;
  font-weight: 200;

  color: #215228;

  h1 {
    margin-right: 1rem;
  }

  a {
    justify-content: space-around;
    align-items: center;
    display: flex;
  }
  img {
    width: 5rem;
  }

`;
