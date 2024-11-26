import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type ButtonTypeStyleProsps = 'PRIMARY' | 'SECONDARY';

type Props ={
    type: ButtonTypeStyleProsps;
}
export const Container = styled(TouchableOpacity) <Props>`
flex: 1;

min-height: 56px;
max-height: 56px;

background-color: ${({theme, type}) =>  type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };

justify-content: center;
align-items:center;

border-radius: 6px;



`

export const Title = styled.Text`
${({theme}) => css`
font-size: ${theme.FONT_SIZE.MD};
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.WHITE};
`};


`