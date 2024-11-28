import { BoxInput, Btn, BtnQr, Container, Input, QrCode, SubTitle, Title, TitleBtn } from "./styles";

export function BoxEntregas(){
    return(
        <Container>
            <Title>
                Iniciar nova Entrega
            </Title>
            <SubTitle>
                Número de identificação
            </SubTitle>

            <BoxInput>
                <Input />
                <Btn>
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