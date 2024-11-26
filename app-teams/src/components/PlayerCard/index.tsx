import { Container, Name, Icon } from "./styles";
import { ButtonIcon } from "../ButtonIcon";

type Props = {
    name: string;
    onRemove: () => void;
}

export function PlayerCard({name, onRemove}: Props){
    return(
        <Container>
            <Icon name='person' />
            <Name>
             {name}
            </Name>
            <ButtonIcon 
            icon="close"
            type="SECUNDARY"
            onPress={onRemove}
            />
        </Container>
    )
}