import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function MoodEntryComponent(props) {
    const {initialMood} = props;
    const [text, setText] = useState(initialMood);
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter your mood"
                style={styles.textInput}
                onChangeText={setText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fce846',
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 20
    },
    textInput: {
        fontSize: 20
    }
})