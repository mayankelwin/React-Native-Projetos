import { Container, Logo, BackButton } from "./styles"
import logoImg from '../../assets/logo.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean;
}

export function Header ({showBackButton = false}: Props  ) {

    const navigation = useNavigation();
    
    function handleGoBack(){
        navigation.navigate('groups');
    }


return (
<Container>
    {
        showBackButton &&
    <BackButton onPress={handleGoBack}>
<AntDesign name="left" size={32} color="white" />
    </BackButton>
}
    <Logo source={logoImg}/>
</Container>
)
}