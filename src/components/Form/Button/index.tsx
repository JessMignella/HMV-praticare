import React from "react";
import {RectButtonProps } from "react-native-gesture-handler";

import { 
    Container,
    Title,
    Icon } from "./styles";

interface Props extends RectButtonProps {
    title: string;
    icon: string;
    onPress: () => void;

}
export function Button({icon, title, onPress, ...rest}: Props) {
    return(
        <Container  onPress ={onPress} {...rest}>
            <Icon name={ icon } />
            <Title>{ title }</Title>
        </Container>
    );
}