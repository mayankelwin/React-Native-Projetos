
import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export const Container = styled.View`
flex: 1;
padding: 24px;
background-color: ${({theme}) => theme.COLORS.GRAY_600};
`
export const Content = styled.View`
flex: 1;
justify-content:center;
`
export const Icon = styled(FontAwesome).attrs(({theme}) => ({
    name: "users",
    size: 56,
    color: "green",
}))`
align-self: center;
`
