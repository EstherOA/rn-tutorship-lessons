import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import CardComponent from './src/components/card/CardComponent';

export default function App() {
  const moods= [
    {title: 'Hello', id: 1},
    {title: 'Hey', id: 2},
    {title: 'I love React', id: 3},
  ];

  const renderItem = ({item}) => <CardComponent title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
        {false && <FlatList
          renderItem={renderItem}
          data={moods}
          keyExtractor={mood => mood.id}
        />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
});