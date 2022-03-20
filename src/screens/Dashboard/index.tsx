import React from "react";
import { ActionBubble } from "../../components/ActionBubble";
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
    Actions
    } from "./styles";



export function Dashboard(){
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
                    <Icon name="log-out"/>
                </UserWapper>
            </Header>
            <Actions>
                <ActionBubble type="agendar" title="Agendar"/>
                <ActionBubble type="exames" title="Exames"/>
                <ActionBubble type="receitas" title="Receitas"/>
                <ActionBubble type="duvidas" title="Dúvidas"/>
            </Actions>
        </Container>
    )
}


  