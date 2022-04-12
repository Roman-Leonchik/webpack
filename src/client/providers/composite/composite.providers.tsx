import React from "react"
import StyledProvider from "../styled/styled.providers"

const CompositeProvider: React.FC<any> = ({ children }) => {
    return <StyledProvider>{children}</StyledProvider>
}

export default CompositeProvider
