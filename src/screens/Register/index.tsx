import React from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";

import { 
    Container,
    Form,
    Header,
    Title,
    Fields
} from "./styles";


export function Register() {
    return ( 
        <Container>
            <Header>
                <Title>Registrar Tarefa</Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Preço"
                    />
                    <Select></Select>
                </Fields>
            <Button title="Registrar"/>
            </Form>
        </Container>
    );
}