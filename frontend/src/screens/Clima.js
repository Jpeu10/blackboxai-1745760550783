import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Clima() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima</Text>
      {/* Labels: Temperatura do ar, Umidade do ar, Vel. do vento, Estado de chuva */}
      {/* Gráfico histórico de vento e chuva */}
      {/* Bloqueio visual de “Iniciar missão” se clima adverso */}
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
