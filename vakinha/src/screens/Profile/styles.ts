import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 100%;
flex: 1;
background-color: ${({theme})=> theme.colors.base.bg};
padding: 24px;
padding-top: 45px;
`
export const Title = styled.Text`
color: ${({theme}) => theme.colors.base.white} ;
font-family: ${({theme}) => theme.font_family.regular};
font-size: ${({theme}) => theme.font_size.xg}px;
`