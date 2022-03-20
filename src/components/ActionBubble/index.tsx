import React from 'react';

import { 
    Container,
    Bubble,
    Title,
    Icon,
    ActionContent,
 } from './styles';

 interface Props {
     title: string
     type: 'agendar' | 'exames' | 'receitas' | 'duvidas';
 }

 const icon = {
    agendar: 'calendar',
    exames:  'activity',
    receitas: 'file-text',
    duvidas: 'help-circle'
}


export function ActionBubble({type, title}:Props){
    return (
        <Container>
                <ActionContent>
                    <Bubble>
                        <Icon name={icon[type]} />
                    </Bubble>
                    <Title>{title}</Title>
                </ActionContent>
        </Container>
    )
}
