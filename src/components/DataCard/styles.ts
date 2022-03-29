import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

interface CategoryProps {
  type: "dados" | "habitos" | "patologias" | "medicamentos" | "quiz";
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})<CategoryProps>`
  background-color: ${({ theme, type }) => theme.colors.shape};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  margin-top: ${RFValue(12)}px;
  border-left-color: ${({ theme, type }) => {
    if (type === "dados") {
      return theme.colors.secondary;
    } else if (type === "habitos") {
      return theme.colors.success;
    } else if (type === "medicamentos") {
      return theme.colors.quaternary;
    } else if (type === "patologias") {
      return theme.colors.attention;
    } else if (type === "quiz") {
      return theme.colors.tertiary;
    } else return theme.colors.primary;
  }};
  border-left-width: 15px;
  border-style: solid;
`;
export const ContentCard = styled.View`
  flex-direction: row;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons)<CategoryProps>`
  color: ${({ theme, type }) => {
    if (type === "dados") {
      return theme.colors.secondary;
    } else if (type === "habitos") {
      return theme.colors.success;
    } else if (type === "medicamentos") {
      return theme.colors.quaternary;
    } else if (type === "patologias") {
      return theme.colors.attention;
    } else if (type === "quiz") {
      return theme.colors.tertiary;
    } else return theme.colors.primary;
  }};
  font-size: ${RFValue(20)}px;
`;

export const Title = styled.Text<CategoryProps>`
  color: ${({ theme, type }) => {
    if (type === "dados") {
      return theme.colors.secondary;
    } else if (type === "habitos") {
      return theme.colors.success;
    } else if (type === "medicamentos") {
      return theme.colors.quaternary;
    } else if (type === "patologias") {
      return theme.colors.attention;
    } else if (type === "quiz") {
      return theme.colors.tertiary;
    } else return theme.colors.primary;
  }};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  padding-left: 3px;
  width: ${RFPercentage(32)}px;
`;
export const Description = styled.Text<CategoryProps>`
  color: ${({ theme, type }) =>
    type === "notify" ? theme.colors.shape : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(10)}px;
  width: ${RFPercentage(40)}px;
  padding-top: 2px;
  padding-left: 21px;
  text-align: left;
`;
export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const Status = styled.Text<CategoryProps>`
  color: ${({ theme, type }) =>
    type === "notify" ? theme.colors.shape : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  text-align: right;
`;

