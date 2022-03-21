import styled from "styled-components/native";
import { RFPercentage, RFValue } from'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
export const Container = styled.View`
flex: 1;
background-color: ${( { theme }) => theme.colors.background} ;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(30)}px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: flex-start;
    
`;

export const UserWapper = styled.View`
    width: 100%;

    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 35px;

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
    font-family: ${({theme}) => theme.fonts.bold    };
`;

export const Icon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(28)}px;
`;

export const Actions = styled.ScrollView.attrs({
    horizontal: true, 
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{padding: 15 }
})`
    position: absolute;
    margin-top: ${RFPercentage(22)}px;
    
`;

export const ActionCards = styled.View`
    flex: 1;
    padding: 0 10px;
    margin-top: ${RFPercentage(20)}px;
    background-color: #DDDDDD;
`;

export const CardList = styled.FlatList`
`;