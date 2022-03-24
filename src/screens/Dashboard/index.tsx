import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ActionBubble } from "../../components/ActionBubble";
import { ActionCard } from "../../components/ActionCard";
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
    CardList
    } from "./styles";




export function Dashboard(){
    const data= [
    {
        type: 'notify',
        key: 'medicacao',
        icon: 'notifications',
        title: 'Medicação',
        description: 'Rivotril 2 mg | 10/03/2022 08:00',
        status: 'Há 5 min',
        actionIcon: 'checkmark-outline'
    },
    {
        type:'notify',
        key: 'pressao',
        icon: 'notifications',
        title: 'Aferir pressão',
        description: 'Tarefa: Após janta | Dr. Luiz Couto | 10/03/2022 20:00',
        status: 'Há 1 dia',
        actionIcon: 'checkmark-outline'
    },
    {
        type: 'menu',
        key: 'tarefa',
        icon: 'list-outline',
        title: 'Tarefas',
        description: '3/5 tarefas conclúidas | 1 atrasada',
        status: '',
        actionIcon: 'chevron-forward-outline'
    },

    {
        type: 'menu',
        key: 'chat',
        icon: 'chatbubble-ellipses-outline',
        title: 'Conversas',
        description: 'Veja suas conversas anteriores ou envie uma mensagem',
        status: '',
        actionIcon: 'chevron-forward-outline'
    },
    {
        type: 'menu',
        key: 'doc',
        icon: 'document-attach-outline',
        title: 'Documentos',
        description: 'Exames | receitas| prontuários |Anexos',
        status: '',
        actionIcon: 'chevron-forward-outline'
    },]
    return(
        <Container>
            <Header>
                <UserWapper>
                    <UserInfo>
                        <Photo source={{uri:'https://avatars.githubusercontent.com/u/15378958?v=4'}}/>
                        <User>
                            <UserGreetings>Olá,</UserGreetings>
                            <UserName>Jéssica</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="log-out-outline"/>
                </UserWapper>
            </Header>
            <Actions>
                <ActionBubble type="marcar" title="Marcar" subTitle="consulta/exames"/>
                <ActionBubble type="atendimento" title="Teleconsulta" subTitle="online"/>
                <ActionBubble type="agendar" title="Meus Agendamentos" subTitle=""/>
                <ActionBubble type="exames" title="Exames" subTitle="(Resultados)"/>
                <ActionBubble type="receitas" title="Receitas" subTitle=""/>
                <ActionBubble type="duvidas" title="Dúvidas" subTitle=""/>
            </Actions>
            <ActionCards>
                <CardList
                data={data}
                renderItem ={({item}) => <ActionCard data={item}/>}
                showsVerticalScrollIndicator= {false}
                contentContainerStyle = {{
                    paddingBottom: getBottomSpace()
                }}
                />
            </ActionCards>
            
        </Container>
    )
}


  