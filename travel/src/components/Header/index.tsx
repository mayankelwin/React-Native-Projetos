import { Container, Title, User } from "./styles";
import userImg from '../../assets/user.png'
type Props = {
    title: string;
}
export function Header({title}: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <User  source={userImg} />
        </Container>
    )
}