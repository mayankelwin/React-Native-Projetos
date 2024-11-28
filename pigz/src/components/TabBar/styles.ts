import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
margin-top: 30px;
width: 100%;
height: 60px;
padding: 10px 0;
bottom: 0;


flex-direction: row;
justify-content: space-between;
align-items: center;

`
export const Btn = styled(TouchableOpacity)`
align-items: center;
justify-content: center;

`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray400};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: 19px;
  margin-bottom: 6px;
  margin-top: 6px;

`
export const Icon = styled(Ionicons)<{ selected: boolean }>`
font-size: 30px;
color: ${({ selected }) => (selected ? "orange" : 'black')};
transition: color 0.3s ease;
`;