import React from "react"
import { StyleSheetManager } from "styled-components"
import { StyledGlobal } from "./styled.styled"

const StyledProvider: React.FC<any> = ({ children }) => {
    return (
        <StyleSheetManager>
            <>
                <StyledGlobal />
                {children}
            </>
        </StyleSheetManager>
    )
}

export default StyledProvider
