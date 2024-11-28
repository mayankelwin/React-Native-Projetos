import styled from "styled-components/native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Container = styled.View`
flex: 1;
padding: 24px;
background-color: ${({theme})=> theme.colors.white};

`
export const Box = styled.View`
padding-left: 20px;
padding-right: 20px;
justify-content: space-between;
flex-direction: row;
margin-top: 30px;
`

export const SubTitle = styled.Text`
text-align: center;
font-size: 19px ;
font-family: ${({theme})=> theme.font_family.regular};
color: ${({theme})=> theme.colors.base.gray500};
`
export const BoxTitle1 = styled.View`
padding-left: 50px;
padding-right: 50px;
justify-content: space-between;
flex-direction: row;
margin-top: 1px;
`

export const BoxInfo1 = styled.Text`

font-size: 25px ;
font-family: ${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.Orange_dark};
`

export const Box2 = styled.View`
padding-left: 20px;
padding-right: 20px;
justify-content: center;
align-items: center;
margin-top: 33px;
`
export const BoxInfo2 = styled.Text`

font-size: 45px ;
font-family: ${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.Orange_dark};
`
export const Box3 = styled.View`
flex-direction: row;

padding:16px;

gap: 20px;

height: 56px;
width: 100%;
margin-top: 30px ;
background-color: ${({theme}) => theme.colors.base.Orange};

border-radius: 20px;
align-items: center;

`
export const Icon = styled(FontAwesome6)`
color: ${({theme})=> theme.colors.base.white};
font-size: 24px;

`

export const BoxEntrega = styled.View`

`

export const BoxInfo3 = styled.Text`

font-size: 19px ;
font-family: ${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};
`
export const SubTitle3 = styled.Text`

justify-content: center;
align-items: center;

text-align: center;
font-size: 16px ;
font-family: ${({theme})=> theme.font_family.regular};
color: ${({theme})=> theme.colors.base.white};

`

export const Box4 = styled.View`

padding:16px;

width: 100%;
margin-top: 30px ;

border-radius: 20px;


`
export const BoxColeta = styled.View`
flex-direction: row;
margin-top:10px;

`

export const CircleIcon = styled(Feather)`
color: ${({theme})=> theme.colors.base.Orange_dark};
font-size: 24px;


`
export const BoxInfo4 = styled.Text`
justify-content: center;
padding-left: 20px;
font-size: 20px ;
font-family: ${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.Orange_dark};
`

export const BoxEndereco = styled.View`
width: 80%;
`
export const Endereco = styled.Text`

padding-left: 20px;
font-size: 16px ;
font-family: ${({theme})=> theme.font_family.regular};
color: ${({theme})=> theme.colors.base.black};
`
export const IconCheck = styled(FontAwesome6)`
color: ${({theme})=> theme.colors.base.white};
font-size: 24px;
padding-right: 20px;

`

export const Btn = styled(TouchableOpacity)`
flex-direction: row;
justify-content: center;
align-items: center;

height: 56px;
width: 100%;
margin-top: 30px ;
background-color: ${({theme}) => theme.colors.base.Orange};

border-radius: 20px;
align-items: center;

`

export const Btn2 = styled(TouchableOpacity)`
flex-direction: row;
justify-content: center;
align-items: center;

height: 56px;
width: 100%;
margin-top: 10px ;
border: 1px solid ${({theme}) => theme.colors.base.Orange};

border-radius: 20px;


`
export const IconClose = styled(FontAwesome)`
color: ${({theme})=> theme.colors.base.Orange_dark};
font-size: 24px;
`