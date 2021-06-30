import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import CardComponent from './src/components/card/CardComponent';

export default function App() {
  const moods = [
    {title: 'Hello', id: 1},
    {title: 'Hey', id: "hi"},
    {title: 'I love React', id: 3},
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const renderItem = ({item}) => <CardComponent title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <FlatList
          renderItem={renderItem}
          data={moods}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
});
