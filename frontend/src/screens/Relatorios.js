import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Relatorios() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios</Text>
      {/* Download/visualização de PDF */}
      {/* Gráfico de tendências solo x clima x planta */}
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
