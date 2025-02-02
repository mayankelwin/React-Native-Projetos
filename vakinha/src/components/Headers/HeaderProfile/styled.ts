import styled from "styled-components/native";

export const Container = styled.View`
padding: 24px;
justify-content: center;
align-items: center;
margin-top: 50px;
`
export const Avatar = styled.Image`
border: 2px solid ${({theme})=> theme.colors.base.gray600};
  width: 100px;
  height:100px;
  border-radius: 100px;
  margin-bottom: 10px;
`;

export const Username = styled.Text`
color: ${({theme}) => theme.colors.base.black} ;
font-family: ${({theme}) => theme.font_family.bold};
font-size: ${({theme}) => theme.font_size.lg}px;
text-transform: uppercase;

text-align: center;
`
export const UserEmail = styled.Text`
color: ${({theme}) => theme.colors.base.black} ;
font-family: ${({theme}) => theme.font_family.regular};
font-size: ${({theme}) => theme.font_size.md}px;

text-align: center;
`