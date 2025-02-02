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

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #007bff;
`;