import FotoTest from '../../assets/teste.jpg'
import { ConfigProfile } from '../../components/ConfigProfile';

import { HeaderPerfil } from "../../components/Headers/HeaderProfile";
import { Container, Title } from "./styles";

export function Profile(){
    return(
        <Container>
            <HeaderPerfil  username='Mayan ' useremail='mayankelwin@gmail.com' avatar={FotoTest} />
            
            <ConfigProfile />
        </Container>
    )
}