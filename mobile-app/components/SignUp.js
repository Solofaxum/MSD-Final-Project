import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView

} from 'react-native';
import {
    Container,
    Button,
    Content,
    Form,
    Item,
    Input,
    Label,

} from 'native-base';
import axios from "axios";
import MarginController from './MarginController';


const SignUp = ({ navigation: { navigate } }) => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')

        const goToSignIn = () => {
        navigate('SIGNIN')
    }

    const varifySignup = async (res, req) => {
        const URL = "http://172.19.142.121:7000/api/customers/signup";
        try {
            const response = await axios.post(URL,
                {
                    firstname,
                    lastname,
                    email,
                    password
                })
                console.log(response);
                // res.status(200).json({ success: true, data: response })
            navigate('SIGNIN')
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>First name</Label>
                                <Input
                                    value={firstName}
                                    onChangeText={(text=> setFirstname(text))} />
                            </Item>

                            <Item floatingLabel>
                                <Label>Last Name</Label>
                                <Input
                                    value={lastName}
                                    onChangeText={(text=>setLastname(text))} />
                            </Item>

                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    value={userEmail}
                                    onChangeText={(text=>setEmail(text))} />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    value={userPassword}
                                    secureTextEntry={true}
                                    onChangeText={(text=>setPassword(text))}
                                />
                            </Item>
                            <MarginController>
                                <Button style={styles.button}
                                    full light onPress={varifySignup}>
                                    <Text>Register</Text>
                                </Button>
                            </MarginController>
                            <Button style={styles.button} full info onPress={goToSignIn}>
                                <Text>You have Account?</Text>
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
    },
    title: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    button: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'stretch',
        backgroundColor: 'black',
        borderStyle: "solid",
        borderRadius: 25,
        backgroundColor: "lightgreen"
    }
});

export default SignUp;