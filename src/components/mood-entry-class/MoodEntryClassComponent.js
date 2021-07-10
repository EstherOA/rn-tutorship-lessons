import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

export default class MoodEntryClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.initialMood
        }
    }

    // componentDidMount() {
    //     Alert.alert('Mounted');
    // }

    // componentDidUpdate() {
    //     Alert.alert('Updated');
    // }
    
    // componentWillUnmount() {
    //     Alert.alert('Unmounted');
    // }
    
    render() {
        const {initialMood} = this.props; //destructuring

        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your mood"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={initialMood}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#f2f2f2',
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 20
    },
    textInput: {
        fontSize: 20
    }
})