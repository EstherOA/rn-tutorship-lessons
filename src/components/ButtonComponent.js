import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const ButtonComponent = () => {

    const handlePress = () => Alert.alert("I am pressed!");

    return (
        <View style={styles.buttonContainer}>
            <Button
                onPress={handlePress}
                title="Press here"
                color="#841584"
                />
        </View>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 20
    }
});