import Image from "./assets/react-logo.png";
import LogoJS from "./assets/js.svg";

export const App = () => {
    const name = "Roman"

    return (
        <>
            <h1>React TypeScript Webpack Startet Template - {process.env.NODE_ENV} {process.env.name}</h1>
            <img src={Image} alt="React logo" width="300"/>
            <img src={LogoJS} alt="React logo" width="50"/>
        </>
    )
}