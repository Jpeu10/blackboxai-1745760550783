import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import SoloScreen from './src/screens/Solo';
import ClimaScreen from './src/screens/Clima';
import MissoesScreen from './src/screens/Missoes';
import PlantasScreen from './src/screens/Plantas';
import RelatoriosScreen from './src/screens/Relatorios';
import AlertasScreen from './src/screens/Alertas';
import ConfiguracoesScreen from './src/screens/Configuracoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Solo" component={SoloScreen} />
        <Stack.Screen name="Clima" component={ClimaScreen} />
        <Stack.Screen name="Missoes" component={MissoesScreen} />
        <Stack.Screen name="Plantas" component={PlantasScreen} />
        <Stack.Screen name="Relatorios" component={RelatoriosScreen} />
        <Stack.Screen name="Alertas" component={AlertasScreen} />
        <Stack.Screen name="Configuracoes" component={ConfiguracoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
