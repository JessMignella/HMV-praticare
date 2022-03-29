import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { LogBox } from 'react-native';

import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import theme from './src/global/styles/theme';
import { Register } from './src/screens/Register';
import AppLoading from 'expo-app-loading';
import { Dashboard } from './src/screens/Dashboard';
import { Login } from './src/screens/Login';
import { MeusDados } from './src/screens/MeusDados';
import { ModalScreen } from './src/components/ModalScreen';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] =  useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  
  if (!fontsLoaded){
    
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
       <NavigationContainer theme={ThemeProvider.theme}>
          <Stack.Navigator screenOptions={{ headerShown: false}} >
            <Stack.Group >
              <Stack.Screen
                name='Login'
                component={Login}
              />
              <Stack.Screen
                name='Dashboard'
                component={Dashboard}
              />
              <Stack.Screen
                name='MeusDados'
                component={MeusDados}
              /> 
            </Stack.Group>
          
            <Stack.Group screenOptions={{presentation: 'modal' }} >
              <Stack.Screen 
                name='QrModal'
                component={ModalScreen}
              />
              </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  )
}

 
