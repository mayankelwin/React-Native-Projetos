import styled from "styled-components/native";
import Feather  from "@expo/vector-icons/Feather";

export const Container = styled.View`
padding:16px;

height: 130px;
width: 100%;
margin-top: 20px ;
background-color: ${({theme}) => theme.colors.base.Orange};

border-radius: 20px;

justify-content: center;


`
export const RowTitle = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const TitleGanhos = styled.Text`

font-size: ${({theme})=> theme.font_size.xg} ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};
margin-bottom: 16px;

margin-left:6px;
`

export const TitleData = styled.Text`

font-size: ${({theme})=> theme.font_size.xg} ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};

`

export const RowMoney = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const TitleMoney = styled.Text`
margin-left: 6px;
font-size: 40px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};

`

export const Icon = styled(Feather)`
color: ${({ theme }) => theme.colors.base.white};

`;

export const MaskedText = styled.Text`
  color: #a9a9a9; /* Cinza */
`;