import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.name}>works</Text>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;
