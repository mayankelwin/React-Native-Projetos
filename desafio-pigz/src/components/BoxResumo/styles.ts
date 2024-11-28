import styled from "styled-components/native";

export const Container = styled.View`

padding:16px;

height: 184px;
width: 100%;
margin-top: 30px ;
background-color: ${({theme}) => theme.colors.base.white};
border: 1px solid ${({theme})=> theme.colors.base.gray300};

border-radius: 20px;

`
export const Title = styled.Text`
font-size: 16px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.black};

`
export const BoxCards = styled.View`
width: 100%;
height: 56px;

flex-direction: row;
justify-content: space-between;
font-size: 16px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.white};

`
export const Cards = styled.View`
padding: 10px;
margin-top: 20px;
width: 100px;
height: 100px;

font-size: 16px ;
font-family:${({theme})=> theme.font_family.bold};

border: 1px solid ${({theme})=> theme.colors.base.gray300};
border-radius: 20px;
color: ${({theme})=> theme.colors.base.white};

`

export const TextCards = styled.Text`
text-align: center;
font-size: 14px ;
font-family:${({theme})=> theme.font_family.regular};
color: ${({theme})=> theme.colors.base.gray500};
`

export const TextCardsNunber = styled.Text`
text-align: center;
font-size: 40px ;
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.gray600};
`