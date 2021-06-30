import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ButtonComponent from './src/components/ButtonComponent';
import CardComponent from './src/components/CardComponent';
import CatClassComponent from './src/components/CatClassComponent';
import CatFunctionalComponent from './src/components/CatFunctionalComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <CatClassComponent/>
     <CatFunctionalComponent/>
     <ButtonComponent/>
     <CardComponent/>
    </SafeAreaView>
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
