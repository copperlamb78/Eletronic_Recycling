import styled from "styled-components";

export const AddressContainer = styled.div`
    max-width: 70vw;
    margin: auto;
    margin-top: 2vh;
    margin-bottom: 2vh;

    table {
        border-spacing: 0;
        border-radius: 8px;
        overflow: hidden;
    }

    tbody {
        background-color: ${props => props.theme.colors.primary};
        height: 10vh;
        width: 90vw;
        padding: 0.5vw;

        
    }


    td {
        font-size: 1.5vw;
        padding: 3vw;
        
        &:first-child {
            width: 40%;
        }

        &:nth-child(2) {
            width: 70%;
        }

        &:last-child {
            width: 0;
        }
    }
`
export const StyledP = styled.p`

`

export const LinkA = styled.a`
    text-decoration: none;
    color: inherit;

    &:hover {
        color: ${props => props.theme.colors.secondary}
    }
`