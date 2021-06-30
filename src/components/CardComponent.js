import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardComponent = () => {
  return (
    <View>
      <View style={styles.cardView}>
        <View style={styles.headerView}>
          <Text style={styles.title}>I am a Card</Text>
        </View>
        <View style={styles.cardContentView}>
          <View style={styles.leftContent}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/man.jpg')}
            />
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.cardContentText}>Esther Mingle</Text>
            <Text style={styles.cardContentText}>Age: 13</Text>
            <Text style={styles.cardContentText}>Doctor</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  cardView: {
    marginHorizontal: 20,
    elevation: 3,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  headerView: {
    backgroundColor: 'darkgreen',
    padding: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
  cardContentView: {
    width: '100%',
    height: 200,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    width: '40%',
    height: '100%',
  },
  rightContent: {
    width: '60%',
    height: '100%',
    paddingLeft: 20,
  },
  cardImage: {
    width: 150,
    resizeMode: 'cover',
    height: 200,
  },
  introText: {
    color: 'black',
  },
  cardContentText: {
      fontSize: 18
  }
});

