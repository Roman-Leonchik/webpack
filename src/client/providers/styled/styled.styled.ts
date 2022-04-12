import { createGlobalStyle, css } from "styled-components"
import styledNormalize from "styled-normalize"

const globalStylesCss = css`
    ${styledNormalize};

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 1.2;
    }
`

export const StyledGlobal = createGlobalStyle`${globalStylesCss};` as any
