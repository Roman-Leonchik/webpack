import {
    StyledPage,
    StyledContainer,
    StyledTitle,
    StyledText,
    StyledImage,
} from "./styled"
import CompositeProvider from "./providers/composite/composite.providers"

export const App = () => {
    return (
        <CompositeProvider>
            <StyledPage>
                <StyledContainer>
                    <StyledTitle>Webpack для React</StyledTitle>
                    <StyledText>
                        Режим разработки - <b>{process.env.NODE_ENV}</b>
                    </StyledText>
                    <StyledImage
                        src={require("@assets/img/react-logo.png")}
                        alt="React Logo"
                        width="200"
                    />
                </StyledContainer>
            </StyledPage>
        </CompositeProvider>
    )
}
