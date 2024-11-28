import { Container, Title, BackButton} from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    title: string;
}

export function Header ({title}: Props) {
return (
<Container>
    <BackButton>
<AntDesign name="arrowleft" size={32} color="orange" />
    </BackButton>

 <Title>
    {title}
 </Title>

</Container>
)
}