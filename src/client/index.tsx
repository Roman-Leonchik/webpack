import { StyledPage, StyledContainer, StyledTitle } from "./styled"
import CompositeProvider from "./providers/composite/composite.providers"

export const App = () => {
    return (
        <CompositeProvider>
            <StyledPage>
                <StyledContainer>
                    <StyledTitle>
                        React TypeScript Webpack Startet Template -{" "}
                        {process.env.NODE_ENV}
                    </StyledTitle>
                </StyledContainer>
            </StyledPage>
        </CompositeProvider>
    )
}
