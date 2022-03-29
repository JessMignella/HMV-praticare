import React from "react";

import { 
    Container,
    Header,
    Body,
    ContentCard,
    Icon,
    Title,
    Description,
    ActionIcon,
    Status,
} from "./styles";

interface Data {
    type: 'notify' | 'menu';
    key: string;
    icon: string;
    title: string;
    description: string;
    status: string;
    actionIcon: string;
}
interface Props{
    data: Data;
}


export function NotificationCard({data}: Props){
    return(
        <Container>
            <ContentCard>
                <Header> 
                    <Icon name={data.icon} type={data.type}></Icon>
                    <Title type={data.type} >{data.title}</Title>
                    <Status>{data?.status}</Status>
                </Header>
                <Body>
                    <Description>{data.description}</Description>
                   <ActionIcon type={data.type} name={data.actionIcon}></ActionIcon>
                 </Body>
            </ContentCard>
        </Container>
    )
}
