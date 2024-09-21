import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.bw};
    }
`