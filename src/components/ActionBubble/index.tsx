import React from 'react';

import { 
    Container,
    Bubble,
    Title,
    SubTitle,
    Icon,
    ActionContent,
 } from './styles';

 interface Props {
     title: string;
     subTitle: string;
     type:  'atendimento'| 'marcar'  | 'agendar' | 'exames' | 'duvidas' | 'receitas';
 }

 const icon = {
    agendar: 'calendar',
    exames:  'activity',
    receitas: 'file-text',
    duvidas: 'help-circle',
    atendimento: 'video',
    marcar: 'plus-circle'
}


export function ActionBubble({type, title, subTitle}:Props){
    return (
        <Container>
                <ActionContent>
                    <Bubble>
                        <Icon name={icon[type]} />
                    </Bubble>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </ActionContent>
        </Container>
    )
}
