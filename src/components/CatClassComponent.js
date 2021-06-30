import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class CatClassComponent extends Component {
  render() {
    return (
    <View style={styles.catContainer}>
      <Text style={styles.catText}>Meow! I am a cat!</Text>
    </View>
    );
  }
}

export default CatClassComponent;

const styles = StyleSheet.create({
    catContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        backgroundColor: 'red',
        marginBottom: 20
    },
    catText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    }
});