import React, { Component } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

export default class CardClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            stateTitle: "Contructed state!",
            bgColor: colors[0] //hoisting
        };
    }

    componentDidMount() {
        // this.state.stateTitle = "new state"; //immutability NO! 

        setTimeout(() => this.setState({stateTitle: "Mounted state", bgColor: colors[2]}), 3000);
    }

    componentDidUpdate() { //change to state/props
        console.log("Updated!");
    }

    componentWillUnmount() {
        Alert.alert("Unmounted");
    }

    render() {
        const {propsTitle} = this.props;
        const {stateTitle, bgColor} = this.state;

        return (
            <View
            style={[styles.cardContainer, {backgroundColor: bgColor}]}>
                <Text style={styles.text}>{stateTitle}</Text>
            </View>
        );
    }
}
const colors = ['#F2994A', '#2F80ED', '#56CCF2', '#BB6BD9', '#EB5757'];

const getRandomColor = arr => {
    var item = arr[Math.floor(Math.random() * arr.length)];
    return item;
  };
  
const styles = StyleSheet.create({
    cardContainer: {
      width: '100%',
      height: 100,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 34,
    },
  });
  