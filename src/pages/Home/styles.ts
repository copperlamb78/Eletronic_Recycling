import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vw;
    margin-top: 3%;
    gap: 1vw;

    @media(max-width: 640px) {
        display: block;
        padding: 4vw;
    }
`
export const TextContainer = styled.div`
    p {
        text-align: justify;
        font-size: 2vw;
    }
    @media(max-width: 640px) {
        p {
            font-size: 4vw;
        }        
    }

`
export const Image = styled.img`

    width: 40vw;
    height: 25vw;
    border-radius: 2vw;

    @media(max-width: 640px) {
        display: block;
        margin: auto;
        width: 80vw;
        height: 50vw;
        margin-top: 5vh;
    }
`