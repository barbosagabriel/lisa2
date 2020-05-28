import styled from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const Container = styled.View`
  width: ${width * 0.3333}px;
  height: 100px;
  border-width: 0.4px;
  border-color: #999999;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 18px;
`;

export const Label = styled.Text`
  padding-top: 6px;
  font-size: 12px;
  color: #999999;
`;
