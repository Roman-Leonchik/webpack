import styled, { keyframes } from "styled-components"

const spin = keyframes`
    0% {
		transform: rotate(0);
	}

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

export const StyledPage = styled.div`
    padding: 70px 0 20px;
    min-height: 100vh;
    position: relative;
    &:before {
        content: "";
        background-image: url(${require("@assets/img/bg-blue.png")});
        background-position: left bottom;
        background-repeat: repeat-x;
        background-size: 250px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
        pointer-events: none;
    }
`

export const StyledContainer = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1200px;
`

export const StyledTitle = styled.h1`
    font-size: 40px;
    margin: 0 0 20px;
    text-align: center;
    color: ${({ theme }) => theme.dark};
`
export const StyledText = styled.p`
    font-size: 20px;
    padding: 0;
    text-align: center;
`

export const StyledImage = styled.img`
    margin: 0 auto 20px;
    display: block;
    animation: 20s ${spin} linear infinite;
`
