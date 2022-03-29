import React, { useState } from "react";
import { DataCard, DataCardProps } from "../../components/DataCard";


import {
  Container,
  Header,
  Icon,
  DataCards,
  CardList,
  Title,
  Description,
  AlertIcon,
  AlertMessage
} from "./styles";

export interface DataListProps extends DataCardProps {
  id: string;
}

export function MeusDados({navigation}) {

  const data: DataListProps[] = [
    {
      id: "1",
      type: "dados",
      key: "MeusDados",
      icon: "people-outline",
      title: "Dados Cadastrais",
      status: "87%",
    },
    {
      id: "2",
      type: "habitos",
      key: "tarefa",
      icon: "bicycle-outline",
      title: "Habitos",
      status: "35%",
    },

    {
      id: "3",
      type: "medicamentos",
      key: "chat",
      icon: "receipt-outline",
      title: "Medicamentos",
      status: "100%",
    },
    {
      id: "4",
      type: "patologias",
      key: "doc",
      icon: "bandage-outline",
      title: "Patologias",
      status: "100%",
    },

    {
        id: "5",
        type: "quiz",
        key: "doc",
        icon: "chatbubbles-outline",
        title: "Questionarios",
        status: "4/8 ",
      },
      {
        id: "5",
        type: "exames",
        key: "doc",
        icon: "flask-outline",
        title: "Exames",
        status: " 5/12 ",
      },
  ];
  return (
    <Container>
      <Header>
          <Icon name="fitness-outline" />
          <Title> Meus Dados</Title>
      </Header>
      <DataCards>
        <AlertMessage>
          <AlertIcon name="alert-circle" />
          <Description>Complete suas informações e mantenha seu cadastro sempre atualizado.</Description>

        </AlertMessage>
        <CardList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
          <DataCard onPress={() => navigation.navigate('MeusDados')} data={item} />}
        />
      </DataCards>
    </Container>
  );
}
