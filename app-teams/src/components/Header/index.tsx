import { Container, Logo, BackButton } from "./styles"
import logoImg from '../../assets/logo.png'
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    showBackButton?: boolean;
}

export function Header ({showBackButton = false}: Props  ) {
return (
<Container>
    {
        showBackButton &&
    <BackButton>
<AntDesign name="left" size={32} color="white" />
    </BackButton>
}
    <Logo source={logoImg}/>
</Container>
)
}