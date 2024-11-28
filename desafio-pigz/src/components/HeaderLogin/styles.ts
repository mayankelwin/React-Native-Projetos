import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 86px;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 23px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.base.black};
  margin-top: 8px;
  margin-bottom: 37px;
`;
