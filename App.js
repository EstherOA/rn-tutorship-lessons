import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CardComponent from './src/components/card/CardComponent';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
       <CardComponent title="Nice!"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 150
  },
});
