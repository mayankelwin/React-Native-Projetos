import styled from "styled-components/native";
import Feather  from "@expo/vector-icons/Feather";

export const Container = styled.View`
padding:16px;

height: 107px;
width: 100%;
margin-top: 20px ;
background-color: ${({theme}) => theme.colors.base.Orange};

border-radius: 20px;


`
export const RowTitle = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const TitleGanhos = styled.Text`
font-size: 16px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};

`

export const TitleData = styled.Text`

font-size: 16px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};

`

export const RowMoney = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const TitleMoney = styled.Text`
margin-left: 6px;
font-size: 30px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};

`

export const Icon = styled(Feather)`
color: ${({ theme }) => theme.colors.base.white};

`;