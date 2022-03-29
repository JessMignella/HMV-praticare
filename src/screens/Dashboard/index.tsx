import React, { useState } from "react";
import { ActionBubble } from "../../components/ActionBubble";
import { ActionCard, ActionCardProps } from "../../components/ActionCard";


import {
  Container,
  Header,
  UserWapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  Actions,
  ActionCards,
  CardList,
  LogoutButton
} from "./styles";

export interface CardListProps extends ActionCardProps {
  id: string;
}

export function Dashboard({navigation}) {
  const data: CardListProps[] = [
    {
      id: "1",
      type: "notify",
      key: "MeusDados",
      icon: "fitness-outline",
      title: "Meus Dados",
      description: "Veja suas informações compartilhadas",
      status: "",
      actionIcon: "chevron-forward-outline"
    },
    {
      id: "3",
      type: "menu",
      key: "tarefa",
      icon: "list-outline",
      title: "Tarefas",
      description: "3/5 tarefas conclúidas | 1 atrasada",
      status: "",
      actionIcon: "chevron-forward-outline",
    },

    {
      id: "4",
      type: "menu",
      key: "chat",
      icon: "chatbubble-ellipses-outline",
      title: "Conversas",
      description: "Veja suas conversas anteriores ou envie uma mensagem",
      status: "",
      actionIcon: "chevron-forward-outline",
    },
    {
      id: "5",
      type: "menu",
      key: "doc",
      icon: "document-attach-outline",
      title: "Documentos",
      description: "Exames | receitas| prontuários |Anexos",
      status: "",
      actionIcon: "chevron-forward-outline",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/15378958?v=4",
              }}
            />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Jéssica</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => navigation.navigate('Login', true)}>
            <Icon name="log-out-outline" />
          </LogoutButton>
        </UserWapper>
      </Header>
      <Actions>
        <ActionBubble type="marcar" title="Marcar" subTitle="consulta/exames" />
        <ActionBubble
          type="atendimento"
          title="Teleconsulta"
          subTitle="online"
        />
        <ActionBubble type="agendar" title="Meus Agendamentos" subTitle="" />
        <ActionBubble type="exames" title="Exames" subTitle="(Resultados)" />
        <ActionBubble type="receitas" title="Receitas" subTitle="" />
        <ActionBubble type="duvidas" title="Dúvidas" subTitle="" />
      </Actions>
      <ActionCards>
        <CardList
          data={data}
          keyExtractor={( item ) => item.id}
          renderItem={({ item }) => <ActionCard onPress={() => navigation.navigate(item.key )} data={item} />}
        />
      </ActionCards>
    </Container>
  );
}
