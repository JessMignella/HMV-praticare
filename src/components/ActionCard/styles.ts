import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    flex-direction:  row;
    justify-content: space-between;
    padding: 10px 10px;
    margin-top: ${RFValue(12)}px;
`;
export const ContentCard = styled.View`
    flex-direction: column;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;    
`;

export const Icon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(20)}px;
`;

export const Title = styled.Text`
color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    padding-left: 3px;
    width:  ${RFPercentage(36)}px;


`;
export const Description = styled.Text`
color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.light};
    font-size: ${RFValue(10)}px;
    width:  ${RFPercentage(40)}px;
    padding-top: 2px;
    padding-left: 21px;
    text-align: left;
`;
export const  Body = styled.View`
flex-direction: row;
align-items: center;
padding-bottom: ${RFValue(22)}px;

`;

export const Status = styled.Text`
color:  ${({ theme }) => theme.colors.text };
font-family: ${({ theme }) => theme.fonts.light_italic};
font-size: ${RFValue(10)}px;
`;

export const ActionIcon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(28)}px;
`;