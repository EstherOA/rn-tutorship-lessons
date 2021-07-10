import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

const CardComponent = props => {
  const [stateTitle, setStateTitle] = useState(props.title);
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    setTimeout(() => {
      setStateTitle("Updated state");
      setBgColor(getRandomColor(colors))
    }, 3000);
  }, [props.title]); //dependencies array - customize render behaviour

  useEffect(() => {
    console.log("One time");
    return () => handleCleanup;
  }, []); //one-time effect (mounts, unmounts);

  const handleCleanup = () => Alert.alert("Unmounted");

  return (
    <View
      style={[styles.cardContainer, {backgroundColor: bgColor}]}>
      <Text style={styles.text}>{stateTitle}</Text>
    </View>
  );
};

const getRandomColor = arr => {
  var item = arr[Math.floor(Math.random() * arr.length)];
  return item;
};

const colors = ['#F2994A', '#2F80ED', '#56CCF2', '#BB6BD9', '#EB5757'];

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

export default CardComponent;
