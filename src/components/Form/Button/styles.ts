import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.tertiary};
    color: ${({theme}) => theme.colors.shape};
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    justify-content: center;

`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.medium};
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(28)}px;
`;