import { StyledPage, StyledContainer, StyledText, StyledImage } from "./styled";
import { Title } from "./components/elements/title/title.elements";
import CompositeProvider from "./providers/composite/composite.providers";

export const App = () => {
    return (
        <CompositeProvider>
            <StyledPage>
                <StyledContainer>
                    <Title title="Webpack для React" />
                    <StyledText>
                        Режим разработки проекта - <b>{process.env.NODE_ENV}</b>
                    </StyledText>
                    <StyledImage
                        src={require("@assets/img/react-logo.png")}
                        alt="React Logo"
                        width="200"
                    />
                </StyledContainer>
            </StyledPage>
        </CompositeProvider>
    );
};
