import React from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

export default function MoodEntryComponent() {
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter your mood"
                style={styles.textInput}
                onChangeText={text => console.log(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#f2f2f2',
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 20
    }
})