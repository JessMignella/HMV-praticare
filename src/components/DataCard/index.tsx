import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import {
  Container,
  Body,
  ContentCard,
  Icon,
  Title,
  Status,
} from "./styles";

export interface DataCardProps {
  type: "dados" | "habitos" | "patologias" | "medicamentos" | "quiz";
  key: string;
  icon: string;
  title: string;
  status: string;
}
interface Props extends RectButtonProps {
  data: DataCardProps;
  onPress: () => void;
}

export function DataCard({ data,onPress, ...rest }: Props) {
  return (
    <Container
        onPress = {onPress} 
        type={data.type}
    >
      <ContentCard>
        <Body>
          <Icon name={data.icon} type={data.type}></Icon>
          <Title type={data.type}>{data.title}</Title>
          <Status>{data?.status}</Status>
        </Body>
      </ContentCard>
    </Container>
  );
}
