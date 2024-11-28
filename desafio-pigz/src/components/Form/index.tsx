import { ActivityIndicator, Alert, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import googleImg from '../../assets/google.png'

import {
  Email,
  Senha,
  Title,
  Subtitle,
  EsqueceuSenha,
  TitleEsqueceu,
  BoxInput,
  Icon,
  BoxSingIn,
  TextSingIn,
  TitleCriar,
  BtnCriarConta,
  TitleEntrarGoogle,
  BoxGoogle,
  BtnGoogle,
  ImgGoogle,
  TitleGoogle,
  Btn,
} from "./styles";
import { useState } from "react";
import { TItle } from "../Button/styles";
type Props = {
  title: string;
  email: string;
  senha: string;
  titlecriar: string;
  criar: string;
};

export function InputEmail({
  title,
  email,
  senha,
  titlecriar,
  criar,
  ...rest
}: Props) {

  const navigation = useNavigation<NavigationProp<any>>()

  const [gmail, setGmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function getLogin(){
    try {
      setLoading(true)

      if(!gmail || !password){
        return Alert.alert("Atenção", "Informe os campos obrigatório! ")
      }
      navigation.navigate("BottomRoutes")
    
  } catch (error) {
    console.log('Error')
  } finally{
      setLoading(false)

    }
  }

  return (
    <View>
      <Title>{title}</Title>
      <Subtitle>{email}</Subtitle>
      
      <Email {...rest} 
      placeholder="exemplo@pigz.com.br" 
      keyboardType="email-address"
      autoCapitalize="none"
      value={gmail}
      onChangeText={(e) => setGmail(e)}
      />
      <Subtitle>{senha}</Subtitle>

      <BoxInput>
        <Senha {...rest} 
        placeholder="* * * * * * * *" 
        secureTextEntry 
        value= {password}
        onChangeText={(e) => setPassword(e)}
        />
        <Icon name="eye" size={40} />
      </BoxInput>

      <EsqueceuSenha>
        <TitleEsqueceu>Esqueceu a senha</TitleEsqueceu>
      </EsqueceuSenha>

      <Btn onPress={()=>getLogin()}>
        {loading? <ActivityIndicator color={'#ffffff'} size={35}/> : <TItle>Entrar</TItle>}
        
       </Btn>

      <BoxSingIn>
        <TextSingIn>{titlecriar}</TextSingIn>

        <BtnCriarConta>
          <TitleCriar>{criar}</TitleCriar>
        </BtnCriarConta>
      </BoxSingIn>

      <TitleEntrarGoogle>
        Entrar com
      </TitleEntrarGoogle>
<BoxGoogle>
<BtnGoogle>

<ImgGoogle source={googleImg}/>
<TitleGoogle> Continuar com o Google </TitleGoogle>
</BtnGoogle>
</BoxGoogle>

    </View>
  );
}
