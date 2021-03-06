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

export interface ActionCardProps {
    type: 'notify' | 'menu';
    key: string;
    icon: string;
    title: string;
    description: string;
    status: string;
    actionIcon: string;
}
interface Props{
    data: ActionCardProps;
    onPress: () => void;
}


export function ActionCard({data, onPress}: Props){
    return(
        <Container onPress={onPress} type={data.type} >
            <ContentCard>
                <Header> 
                    <Icon name={data.icon} type={data.type}></Icon>
                    <Title type={data.type} >{data.title}</Title>
                    <Status>{data?.status}</Status>
                </Header>
                <Body>
                    <Description type={data.type} >{data.description}</Description>
                   <ActionIcon type={data.type} name={data.actionIcon}></ActionIcon>
                 </Body>
            </ContentCard>
        </Container>
    )
}
