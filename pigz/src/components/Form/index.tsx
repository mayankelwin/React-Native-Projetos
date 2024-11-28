import { ActivityIndicator, Alert, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  BoxGoole1,
  BoxGoogle2,
  Border,
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
}: Props, ) {
  // Controla visibilidade da senha
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  
  //Muda a visibilidade da senha com icon
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prevState => !prevState);}
  
  // Telas
  const navigation = useNavigation();
  
  // Validação de login
  const [gmail, setGmail] = useState<string>('pigz@gmail.com'); 
  const [password, setPassword] = useState<string>('123'); 
  const [loading, setLoading] = useState<boolean>(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [error, setError] = useState<string>('');

  const handleHome = () => {
    setLoading(true);

    if (!gmail || !gmail.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      setLoading(false);
      return;
    }

    if (!password) {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      setLoading(false);
      return;
    }

    if (gmail !== 'pigz@gmail.com' || password !== '123') {
      Alert.alert('Erro', 'Usuário não cadastrado ou credenciais incorretas.');
      setLoading(false);
      return;
    }

    navigation.navigate('Home');
    setLoading(false);
  };

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
        secureTextEntry ={secureTextEntry}
        value= {password}
        onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity onPress={toggleSecureTextEntry}>
        <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={40} /> 
      </TouchableOpacity>
      </BoxInput>

      <EsqueceuSenha>
        <TitleEsqueceu>Esqueceu a senha</TitleEsqueceu>
      </EsqueceuSenha>

      <Btn onPress={()=> handleHome()}>
        {loading? <ActivityIndicator color={'#ffffff'} size={35}/> : <TItle>Entrar</TItle>}
        
       </Btn>

      <BoxSingIn>
        <TextSingIn>{titlecriar}</TextSingIn>

        <BtnCriarConta>
          <TitleCriar>{criar}</TitleCriar>
        </BtnCriarConta>
      </BoxSingIn>

<BoxGoole1>
      <TitleEntrarGoogle>
        Entrar com
      </TitleEntrarGoogle>

      <Border></Border>
  
</BoxGoole1>


<BoxGoogle2>
<BtnGoogle>

<ImgGoogle source={googleImg}/>
<TitleGoogle> Continuar com o Google </TitleGoogle>
</BtnGoogle>
</BoxGoogle2>

    </View>
  );
}
