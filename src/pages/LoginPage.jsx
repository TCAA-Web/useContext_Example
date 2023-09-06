import { ContentSection } from "../components/ContentSection/ContentSection"
import { Login } from "../components/Login/Login"

export const LoginPage = ({title}) => {

    return ( 
        <ContentSection title={title}>
            <Login/>
        </ContentSection>
    )
}