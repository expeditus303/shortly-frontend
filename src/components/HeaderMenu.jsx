import { Link } from "react-router-dom"
import styled from "styled-components"

export default function HeaderMenu() {
    return (
        <HeaderMenuContainer>
            <Link>Sign In</Link>
            <Link>Sign Up</Link>
        </HeaderMenuContainer>
    )
}

const HeaderMenuContainer = styled.div`
    background-color: #3fb343f3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;

    a {
        margin: 1rem;
    }
`