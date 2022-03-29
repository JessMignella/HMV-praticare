import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    flex-direction: column;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;
    padding-bottom: 20px;
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    
`;


export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 18px;
    justify-content: space-between;
    
`;

export const Fields = styled.View`
    
`;