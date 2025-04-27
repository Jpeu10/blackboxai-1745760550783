import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      {/* Definir limites de alerta */}
      {/* Dados do servidor e token de acesso */}
      {/* Logout */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
