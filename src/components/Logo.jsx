import styled from "styled-components";
import shortlyLogo from "../assets/shortlyLogo.png"

export default function Logo() {
    return (
        <LogoContainer>
            <h1>Shortly</h1>
            <img src={shortlyLogo} alt="" />
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
  background-color: white;
  width: 80%;
  margin: 10%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 4rem;
  font-weight: 200;

  img {
    width: 5rem;
  }
`