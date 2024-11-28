import { useNavigation } from "@react-navigation/native";
import { BoxInput, Btn, BtnQr, Container, Input, QrCode, SubTitle, Title, TitleBtn } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootParamList ={
    Login: undefined;
    Home: undefined;
    NovaEntrega: undefined;
}
type Props = NativeStackNavigationProp <RootParamList, 'NovaEntrega'>


export function BoxEntregas({}: Props){

    const navigation = useNavigation();
    function handleEntraga(){
    navigation.navigate('NovaEntrega');
  }
    return(
        <Container>
            <Title>
                Iniciar nova Entrega
            </Title>
            <SubTitle>
                Número de identificação
            </SubTitle>

            <BoxInput>
                <Input placeholder="#6789" />

                <Btn onPress={()=>handleEntraga() }>
                <TitleBtn>
                OK
            </TitleBtn>
                </Btn>

            </BoxInput>

            <BtnQr>
                <QrCode name="qrcode-scan" size={20} />

            <TitleBtn>
                Escanear Qrcode
            </TitleBtn>
            </BtnQr>
        </Container>
    )
}