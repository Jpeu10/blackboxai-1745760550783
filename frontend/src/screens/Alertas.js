import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Alertas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas</Text>
      {/* Lista de alertas gerados */}
      {/* Notificações push locais */}
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
