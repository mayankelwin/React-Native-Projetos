import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.base.black} ;
`
export const LoadIndicator = styled(ActivityIndicator)`

`