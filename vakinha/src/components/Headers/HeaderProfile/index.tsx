import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, Container, UserEmail, Username } from './styled';


// Definindo a interface para os dados do usuário
interface HeaderProps {
  username: string;
  useremail: string;
  avatar: any;
}

export function HeaderPerfil({ username, useremail, avatar }: HeaderProps ){
  return (
    <Container>
      <Avatar source={avatar} />
      <Username>{username}</Username>
      <UserEmail>{useremail}</UserEmail>
    </Container>
  );
};
