import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight ,getBottomSpace } from "react-native-iphone-x-helper";
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%
  height: ${RFValue(400)}px;
  padding-bottom: ${RFValue(180)}px;
  
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.quaternary};
  text-align: center;
`;

export const LoginBacground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: ${getStatusBarHeight()}px;
  align-self: center;

`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

export const Fields = styled.View`
 width: 100%;
 margin-top: ${RFPercentage(-30)}px;
`;


export const QrcodeButton = styled.TouchableOpacity`
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${RFValue(30)}px;
    margin-top: ${RFValue(100)}px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(100)}px;
  color: ${({ theme }) => theme.colors.quaternary};
`;



export const Footer = styled.Image`
    flex: 1;
    width: 30%;
    margin-bottom: ${getBottomSpace()}px;

`;


export const UserWapper = styled.View`
    width: 100%;

    padding: 0 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom:${RFValue(50)}px;

`;
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;

`;
export const Photo = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: 50px;
    border: 2px ${({theme})=> theme.colors.shape};
`;
export const User = styled.View`
margin-left: 17px;
`;
export const UserGreetings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;
export const UserName = styled.Text`
 color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold  };
`;
