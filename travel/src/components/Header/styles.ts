import styled, {css} from "styled-components/native";

export const Container = styled.View`
margin-top: 35px;
flex-direction: row;
padding: 24px;
background-color: ${({ theme}) => theme.colors.white};
justify-content: space-between;
align-items: center;

`

export const Title = styled.Text`
${({ theme }) => css`
font-size: ${theme.font_size.xl};
font-family: ${theme.font_family.bold};

`}
`

export const User = styled.Image`
height: 46px;
width: 46px;
`