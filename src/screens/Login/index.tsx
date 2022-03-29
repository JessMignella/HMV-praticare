import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { Container, Fields, Form, Header, Footer, QrcodeButton, Icon , Title,
    Photo, User, UserGreetings, UserInfo, UserName, UserWapper } from "./styles";
import { LoginBacground } from "./styles";
const image = { uri: '' };
export function Login( {navigation} ) {
    const [useremail, setUseremail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLogged, setIsLogged] = React.useState(false);

   if(isLogged) {
    return(
        <Container>
        <Header>
            <LoginBacground 
        source={require('../../global/images/logo-praticare-b.png')}
        resizeMode="contain"
        >
        </LoginBacground>
        </Header>
  
     <Form>
         <Fields>
         <UserWapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/15378958?v=4",
              }}
            />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Jéssica</UserName>
            </User>
          </UserInfo>
        </UserWapper>
         <Button icon='log-in-outline' title=" Entrar novamente" onPress={() => {
             navigation.navigate('Dashboard');
             }} />
         </Fields>

         <QrcodeButton
          onPress={() => navigation.navigate('QrModal')}
         >
             <Icon name='qr-code' />
             <Title>compartilhar meus dados</Title>

        </QrcodeButton>
        <Footer 
            resizeMode="contain"
            source={require('../../global/images/logo-hmv.png')} 
        />

     </Form>
     </Container>
    )
        
   } 
    return(
        <Container>
            <Header>
                <LoginBacground 
            source={require('../../global/images/logo-praticare-b.png')}
            resizeMode="contain"
            >
            </LoginBacground>
            </Header>
      
         <Form>
             <Fields>
                 <Input
                     textContentType ={'emailAddress'}
                     placeholder="Email/CPF"
                     onChangeText={setUseremail}
                 />
                 <Input
                     textContentType ={'password'}
                     placeholder="Senha"
                     onChangeText={setPassword}
                     secureTextEntry
                 />
             <Button icon ='' title="Login" onPress={() => { 
                setIsLogged(true);
                navigation.navigate('Dashboard')}} />
             </Fields>

             <QrcodeButton
                onPress={() => navigation.navigate('QrModal')}>
                 <Icon name='qr-code' />
                 <Title>compartilhar meus dados</Title>

            </QrcodeButton>
            <Footer 
                resizeMode="contain"
                source={require('../../global/images/logo-hmv.png')} 
            />
 
         </Form>
        
     

    </Container>
    )
}

