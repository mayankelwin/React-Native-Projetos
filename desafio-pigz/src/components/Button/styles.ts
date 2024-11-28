import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Btn = styled(TouchableOpacity)`
  min-height: 56px;
  max-height: 56px;
border-radius: 20px;
padding: 16px;
background-color: #FA641E;
elevation: 10px;
`

export const TItle = styled.Text`
font-size: 23px;
color: ${({theme}) => theme.colors.base.white};
font-family: ${({theme}) => theme.font_family.bold};;
text-align: center;
justify-content: center;
`