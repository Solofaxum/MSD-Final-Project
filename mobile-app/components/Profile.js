import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
// import {  Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';



const  Profile = ({navigation:{navigate}}) => {

const goToFarmers = () => {
  navigate('FARMERS');
} 


  const goToFrontPage = () => {
    AsyncStorage.removeItem("token");
    navigate('ABOUTUS');
} 
    return (
      <ScrollView>
        <TouchableOpacity style={styles.logout} onPress={goToFarmers}>
              <Text>Visit Farmers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logout} onPress={goToFrontPage}>
              <Text>Log Out</Text>
            </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: 'https://storage.googleapis.com/farmers-market-association/1595403175293farmer.png' }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Solomon L. G. {}</Text>
            <Text style={styles.name}>solofaxum@gmail.com {}</Text>
            <Text style={styles.info}>Ocupation : MIU{}</Text>
            <Text style={styles.info}>Volunteer status : Active{}</Text>
            <Text style={styles.description}>You do not volunteer for the pursuit of a monetary prize or recognition. You volunteer because the optimist inside you, perhaps the idealist.</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={goToFarmers}>
              <Text>Find Farmers here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 140,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 70
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  },
  logout: {
    
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
    marginLeft: 300
  },
  farmers: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
    marginLeft: 100
  },
});
export default Profile;