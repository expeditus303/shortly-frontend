import { Link } from "react-router-dom"
import styled from "styled-components"
import { FiMenu } from 'react-icons/fi';

export default function HeaderMenu() {
    return (
        <HeaderMenuContainer>
            {/* <Link>Sign In</Link>
            <Link>Sign Up</Link> */}
            <FiMenu />
        </HeaderMenuContainer>
    )
}

const HeaderMenuContainer = styled.div`
    /* background-color: #3fb343f3; */
    background-color: #215228e0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 1rem 4rem 1rem 0rem;
    font-size: 2rem;
    color: #3fb343;

    a {
        margin: 1rem;
    }
`