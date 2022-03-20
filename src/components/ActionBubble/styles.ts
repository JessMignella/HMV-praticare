import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons"

export const Container = styled.View`
    flex: 1;
    margin-right: 12px;
    padding: 0 10px;
    flex-direction: row;
    align-items: flex-start;
`;

export const ActionContent = styled.View`
    align-items: center;

`;

export const Bubble = styled.Pressable`
    flex-direction: column;
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.secondary_light};
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    padding-top: 2px;
    width:  ${RFPercentage(18)}px;
    text-align: center;

`;

export const SubTitle = styled.Text`
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.light_italic};
    font-size: ${RFValue(11)}px;
    padding-top: 2px;
    width:  ${RFPercentage(17)}px;
    text-align: center;

`;

 export const Icon = styled(Feather)`
     color: ${({theme}) => theme.colors.secondary};
     font-size: ${RFValue(24)}px;
 `;
