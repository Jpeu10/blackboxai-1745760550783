import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Plantas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plantas Afetadas</Text>
      {/* Lista de ocorrências com foto, GPS, diagnóstico */}
      {/* Botão “Marcar como Resolvido” */}
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
