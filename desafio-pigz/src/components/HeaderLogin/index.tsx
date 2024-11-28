import { Container, Logo, Title } from "./styles";
import logoImg from '../../assets/logo.png'

type Props = {
    title: string;
}


export function HeaderLogin({title}: Props){
    return(
        <Container>
            <Logo source={logoImg} />
            <Title>
                {title}
            </Title>
        </Container>
    )
}