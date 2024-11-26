import { TouchableOpacity } from "react-native";
import styled , { css }from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 14px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
${({ theme }) => css`
  font-size: ${ theme.FONT_SIZE.MD};
  color: ${theme.COLORS.GRAY_200};
  font-family: ${ theme.FONT_FAMILY.REGULAR};
  margin-left: 20px;
`}
`;
