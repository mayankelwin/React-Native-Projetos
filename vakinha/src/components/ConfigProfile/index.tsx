import { BoxUser, Container, Icon, IconUser, Title } from "./styles";

export function ConfigProfile() {
    return(
        <Container>
            <BoxUser>
                <IconUser name="user" color={'#ea00ff'}/>
            <Title>Nome de usuario</Title>
            </BoxUser>
            
            <BoxUser>
                <Icon name="edit-notifications" color={'#00ccff'} />
            <Title>Notificações</Title>
            </BoxUser>
            
            <BoxUser>
                <Icon name="settings" />
            <Title>Configurações</Title>
            </BoxUser>
        </Container>
    )
}