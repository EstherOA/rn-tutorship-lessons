import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CardComponent from './src/components/CardComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <CardComponent title="Hello There"/>
     <CardComponent title="Hello World"/>
     <CardComponent title="Hello Micah!"/>
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
