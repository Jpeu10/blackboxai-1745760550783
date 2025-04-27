import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Solo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solo</Text>
      {/* Labels dinâmicos: Umidade, Temperatura, pH */}
      {/* Gráfico de linha dos últimos 7 dias */}
      {/* Alerta visual se parâmetro crítico */}
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
