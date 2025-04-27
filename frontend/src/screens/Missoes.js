import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Missoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missões Drone</Text>
      {/* Lista de missões com data e status */}
      {/* Botão “Agendar Nova Missão” */}
      {/* Status de bateria e posicionamento GPS */}
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
