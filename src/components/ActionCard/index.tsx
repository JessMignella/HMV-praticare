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

interface Props{
    data:{
        key: string;
        icon: string;
        title: string;
        description: string;
        status: string;
        actionIcon: string;
    }
}


export function ActionCard({data}: Props){
    return(
        <Container>
            <ContentCard>
                <Header> 
                    <Icon name={data.icon}></Icon>
                    <Title>{data.title}</Title>
                    <Status>{data?.status}</Status>
                </Header>
                <Body>
                    <Description>{data.description}</Description>
                   <ActionIcon name={data.actionIcon}></ActionIcon>
                 </Body>
            </ContentCard>
        </Container>
    )
}
