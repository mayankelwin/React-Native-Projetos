import { HeaderLogin } from "../../components/HeaderLogin";
import { InputEmail } from "../../components/Form";
import { Container, Title } from "./styles";

import { ScrollView } from "react-native";
import { useState } from "react";



export function Login() {
  
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderLogin title="Para entregadores" />

        <InputEmail
          title="Login"
          email="Email ou Telefone"
          senha="Senha"
          titlecriar="Não tem uma Conta?"
          criar="Criar agora!"
        />
      </ScrollView>
    </Container>
  );
}
