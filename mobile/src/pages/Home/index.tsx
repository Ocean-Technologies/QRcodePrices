import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button'
import { useAuth } from '../../hooks/auth'

export default function App() {
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Text>Bem vindo, autenticacao deu certo !</Text>
      <StatusBar style="auto" />
      <Button onPress={signOut} > Deslogar </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});