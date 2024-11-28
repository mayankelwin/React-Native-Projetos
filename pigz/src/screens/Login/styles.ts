import { TouchableOpacity } from "react-native";
import styled , {css} from "styled-components/native";

export const Container = styled.View`
background-color: ${({theme}) => theme.colors.base.white};
flex: 1;
padding: 24px;

justify-content: center;
align-items: center;


`
export const Title = styled.Text`
font-family: ${({theme}) => theme.font_family.bold};
font-size: ${({theme}) => theme.font_size.xg};
color: ${({theme}) =>theme.colors.base.black};
`

export const BoxButton = styled.View`

align-items: center;
justify-content: center;

`