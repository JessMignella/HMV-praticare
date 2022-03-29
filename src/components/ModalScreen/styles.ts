import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
 flex: 1;
 width: 100%;
 align-items: center;
 flex-direction: column;
 padding: ${RFValue(40)}px;
 background-color: ${({theme}) => theme.colors.quaternary};
`;

export const Footer = styled.View`
 flex: 1;
 width: 100%;
 align-items: center;
 margin-bottom: ${RFValue(10)}px;
 justify-content: flex-end;
`;
export const Icon = styled(Ionicons)`
font-size: ${RFValue(50)}px;
color: ${({ theme }) => theme.colors.shape};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${RFValue(5)}px;
  margin-top: ${RFValue(100)}px;
`;

export const QrImage = styled.Image`
flex: 1;
width: ${RFPercentage(40)}px;
align-content: center;
padding-bottom: 100px;
margin-bottom: 10px;
width: 100%;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
font-size: ${RFValue(16)}px;
text-align: center;
width:  ${RFPercentage(35)}px;
color: ${({ theme }) => theme.colors.shape};`