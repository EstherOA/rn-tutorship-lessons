import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardComponent = props => {
  const {title} = props;

  return (
    <View
      style={[styles.cardContainer, {backgroundColor: getRandomColor(colors)}]}>
      <Text style={styles.text}>{title}</Text>
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
