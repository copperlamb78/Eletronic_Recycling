import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme.colors.primary};
    max-width: 100vw;
    height: 13vw;
    border-bottom-right-radius: 3vw;
    border-bottom-left-radius: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center
`
export const LogoContainer = styled.div`
    img {
        width: 10vw;
    }
`

export const MenuContainer = styled(NavLink)`
    margin: 0 1%;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.background};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: end;
    text-decoration: none;
    
    &.active {
        color: ${props => props.theme.colors.secondary};

        &:hover {
            color: ${props => props.theme.colors.background}
        }
    }

    &:hover {
        color: ${props => props.theme.colors.secondary};
    }
    h1 {
        font-size: 3vw;
    }

`