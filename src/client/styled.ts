import styled from "styled-components"

export const StyledPage = styled.div`
    padding: 20px 0;
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
