import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Container = styled.View`
border-radius: 25px;
width: 100%;
height: 60%;

padding: 20px;

justify-content: center;
`
export const BoxUser = styled(TouchableOpacity)`
padding: 20px;
border-radius: 25px;
width: 100%;
height: 100px;

border-bottom: 2px solid #000;
background-color: ${({theme}) => theme.colors.base.green100} ;

flex-direction: row;
margin-bottom: 25px;
align-items: center;

`
export const IconUser = styled(AntDesign)`
font-size: 40px;
`
export const Icon = styled(MaterialIcons)`
font-size: 40px;
`

export const Title = styled.Text`
margin-left: 12px;
color: ${({theme}) => theme.colors.base.gray600} ;
font-family: ${({theme}) => theme.font_family.regular};
font-size: ${({theme}) => theme.font_size.lg}px;
`