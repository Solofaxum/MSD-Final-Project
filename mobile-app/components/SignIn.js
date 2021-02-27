import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    AsyncStorage
} from 'react-native';
import {
    Container,
    Button,
    Content,
    Form,
    Item,
    Input,
    Label,
    Alert,
    Image
} from 'native-base';
import MarginController from './MarginController';
import axios from "axios";

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

      const goToSignUp = () => {
        navigation.navigate('SIGNUP')
    }

    const userSignIn = async () => {
        const URL = "http://172.19.142.121:7000/api/customers/login";
        if (email === '' || password === '') {
            return "please import password or email"
        }
        try {
            let auth = await axios.post(URL, {
                    email: userEmail,
                    password: userPassword })
            await AsyncStorage.setItem("token", auth.data.token)
            console.log(auth.data.token);
            // res.status(200).json({success:true, data:auth})
            navigation.navigate('PROFILE')
        } catch (error) {
            // Alert.alert('Enter details to signin!')
            console.log(error.message)
        }     
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Container>
                    <Content>
                        <Form >
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    value={email}
                                    onChangeText={(text =>setEmail(text))} />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={(text =>setPassword(text))} />

                            </Item>
                            <MarginController>
                                <Button full light onPress={userSignIn} style={styles.button}>
                                    <Text>Sign In</Text>
                                </Button>
                            </MarginController>
                            <Button block success onPress={goToSignUp} style={styles.button}>
                                <Text>Not Registered?</Text>
                            </Button>
                        </Form>
                    </Content>
                </Container>
            </View>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "darkblue"
    },
    title: {
        marginBottom: 1,
        fontSize: 25,
        textAlign: 'center',
        color: 'black'
    },
    button: {
        flex:1,
        paddingTop: 10,
        alignItems: 'stretch',
        backgroundColor: 'black',
        borderStyle:"solid",
        borderRadius: 25,
        backgroundColor:"lightgreen"  
    }
});

export default SignIn;