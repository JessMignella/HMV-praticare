import React from "react";
import { CloseButton, Container, Footer, Icon, QrImage, Title } from "./styles";


export function ModalScreen({navigation}) {

  return (
    <Container>
          <QrImage source={require('../../global/images/qruser.jpg')}
        resizeMode="contain" />
        <Title>Leia o QR code para acessar os dados de Jéssica</Title>
      <Footer>
      <CloseButton onPress={() => navigation.goBack()} name="alert">
        <Icon name="close-circle-outline" />
      </CloseButton>
      </Footer>
    </Container>
  );
}
