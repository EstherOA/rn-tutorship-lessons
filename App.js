import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MoodEntryComponent from './src/components/mood-entry/MoodEntryComponent';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <MoodEntryComponent initialMood="I'm happy"/>
        <MoodEntryComponent initialMood="I'm so sad!"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});