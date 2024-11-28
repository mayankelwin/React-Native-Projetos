import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
padding: 24px;
background-color: ${({theme})=> theme.colors.white};
`

export const Border = styled.View`

bottom: 0;
top: 5px;
width: 100%;
border-top-width: 1px; 
border-top-color: ${({ theme }) => theme.colors.base.gray300};
`