import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import MarginController from './MarginController';

const Home = ({ navigation: { navigate } }) => {

    // const toSignInPage = () => {
    //     navigate('SIGNIN')
    // }
    // const toSignUpPage = () => {
    //     navigate('SIGNUP')
    // }
    return (

        <View style={styles.container}>

            <MarginController>
                <View style={styles.title}>
                    <Text >Organic Farm Products in its Fast Delivery!         
                           online shoping! Good for you, Good for us </Text>
                </View>
            </MarginController>
            <Image style={styles.logo} source={{ uri:"https://www.pineandlakes.com/incoming/article2973701.ece/alternates/BASE_LANDSCAPE/4365405%2B0722_ideal-green-market-logo.jpg"}}/>
            <MarginController >
                <Button style={styles.bottun} block success 
               onPress={() => (navigate('SIGNIN'))}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </Button>
            </MarginController>
            <MarginController>
                <Button style={styles.bottun} block success  onPress={() => (navigate('SIGNUP'))}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </Button>
            </MarginController>
            <MarginController>
                <View style={styles.title}>
                    <Text >Signup,  get orgenic and fresh farm products safly!</Text>
                </View>
            </MarginController>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 200,
        alignItems: 'stretch',
        backgroundColor: 'black',
        borderStyle:"solid"
    },
    title: {
        alignItems: 'center',
        borderWidth: 2,
        padding: 20,
        backgroundColor: 'lightblue'
    },
    bottun:{
        borderRadius: 25,
        backgroundColor:"yellow"  
    },
    logo: {
        width: 200,
        height: 150,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 20
      },
});

export default Home;