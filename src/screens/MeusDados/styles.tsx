import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

import { DataListProps } from '.';


export const Container = styled.View`
flex: 1;
background-color: ${( { theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${getStatusBarHeight() + RFPercentage(10)}px;
    background-color: ${({theme}) => theme.colors.quaternary};
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding-top: ${RFValue(20)}px ;
    
`;
export const Icon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(28)}px;
`;


export const DataCards = styled.View`
    flex: 1;
    padding: 0 10px;
    margin-top: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const CardList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {
            paddingBottom: getBottomSpace()
        }
})``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    
`;

export const AlertMessage = styled.View`
flex-direction: row;
width: 100%;
justify-content: center;
padding: 10px 20px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
`;

export const AlertIcon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(30)}px;
    margin-right: 8px;
`;
