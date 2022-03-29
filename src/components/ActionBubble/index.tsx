import React, { useState } from 'react';

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
    agendar: 'today-outline',
    exames:  'flask-outline',
    receitas: 'receipt-outline',
    duvidas: 'help',
    atendimento: 'videocam-outline',
    marcar: 'checkmark-done-outline'
}


export function ActionBubble({type, title, subTitle}:Props){
        const [press, setPress] = useState(false);

    return (
        <Container>
                <ActionContent
                    onPressIn={() => setPress(true)}
                    onPressOut={() => setPress(false)}>
                    <Bubble 
                    isActive= {press}>
                        <Icon name={icon[type]} isActive={press}/>
                    </Bubble>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </ActionContent>
        </Container>
    )
}
