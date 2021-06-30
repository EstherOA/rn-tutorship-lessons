import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CatFunctionalComponent = () => {
  return (
    <View style={styles.catContainer}>
      <Text style={styles.catText}>Meow! I am a cat!</Text>
    </View>  );
}

export default CatFunctionalComponent;

const styles = StyleSheet.create({
    catContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginBottom: 20
    },
    catText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    }
});