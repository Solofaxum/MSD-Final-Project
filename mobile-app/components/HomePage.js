import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const About = () => {
  return (
    <View style={{ flex: 1, padding: 40, backgroundColor: "orange" }}>
      <Text style={styles.header}>Online Farm Shopping!!</Text>
      <Text style={styles.header}>Farm Rule #1: Feed The People!</Text>

      <AntDesign name="home" size={100} style={styles.icon} color="#0066CC" /><Text style={styles.text}>
        Thank you for joining us! Many farms are moving to online sales options. 
        We are here gathering producers and make sure they make ready every organic farm product you need, safly.
      </Text>
      <Text style={styles.text}>
        During these uncertain times, a dependable food supply is more important than ever. We all need to eat,
        and U.S. farmers—like many essential food industry businesses—are hard at work providing quality,
        sustainable ingredients to feed our communities.Join us to get fresh products today!.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgreen",
    marginVertical: 5,
    fontWeight:"bold",
    textAlign: 'center',
  fontStyle: "italic",
    fontSize: 25,
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    marginTop: 20,
    backgroundColor: "lightblue",
  },
});
