import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Box, Box2, Box3, Box4, BoxColeta, BoxEndereco, BoxEntrega, BoxInfo1, BoxInfo2, BoxInfo3, BoxInfo4, BoxTitle1, Btn, Btn2, CircleIcon, Container, Endereco, Icon, IconCheck, IconClose, SubTitle, SubTitle3 } from "./styles";

export function NovaEntrega(){
    const navigation = useNavigation()

    function handleGOBack(){
    navigation.goBack();
  }
    return (
        <Container>
            <Header title="Nova entrega" />
            
            <Box>
            
            <SubTitle>Tempo Estimado</SubTitle>
            <SubTitle>Número de ID</SubTitle>

            </Box>
            <BoxTitle1>
            <BoxInfo1>
             30 Min
            </BoxInfo1>

            <BoxInfo1>
             #6789
            </BoxInfo1>
            </BoxTitle1>
              
              <Box2>
              <SubTitle>Tempo Estimado</SubTitle>
              <BoxInfo2>R$ 13,75</BoxInfo2>
              </Box2>

              <Box3>
                <Icon name='motorcycle'/>
                <BoxEntrega>
                <BoxInfo3>
                    Entrega
                </BoxInfo3>
                    
                    <SubTitle3>
                    Percuso Total: 9km
                
                </SubTitle3>

                </BoxEntrega>
                
              </Box3>

              <Box4>
                <BoxColeta>
                <CircleIcon name='check-circle' />
                <BoxEndereco>
                 <BoxInfo4>Coleta</BoxInfo4>
                 <Endereco>Restaurante Recanto da Peixada</Endereco>
                 <Endereco >Distancia: 2km</Endereco>
                </BoxEndereco>
                </BoxColeta>

                <BoxColeta>
                <CircleIcon name='circle' />
                <BoxEndereco>
                 <BoxInfo4>Entrega</BoxInfo4>
                 <Endereco>Av. Cabo dos Soldados - Caranã</Endereco>
                 <Endereco >Distancia: 6km</Endereco>
                </BoxEndereco>
                </BoxColeta>
           

           
                
              </Box4>

                <Btn onPress={( ) => handleGOBack()}>
                    <IconCheck name='check' />
                    <BoxInfo3>
                    Aceitar
                </BoxInfo3>
                </Btn>

                <Btn2 onPress={( ) => handleGOBack()}>
                <IconClose name='close' />
                    <BoxInfo4>
                    Rejeitar
                </BoxInfo4>

                </Btn2>

        </Container>
    )
}