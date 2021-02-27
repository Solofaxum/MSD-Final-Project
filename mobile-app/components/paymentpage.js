import React from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    FlatList,
    Image,
    View,
    Text,
    AsyncStorage
} from 'react-native';
import axios from "axios";
import MarginController from './MarginController';
import { Row } from 'native-base';


const Payment = ({ route: { params }, navigation: { navigate } }) => {
    const farmerID = params.data;



    const [carts, setCarts] = React.useState("");
    const [itemPrice, setItemPrice] = React.useState(0);
    let totalPrice = 0;
    console.log("totalprice", totalPrice);

    const goToRating = () => {
        Alert.alert('working.....')
        navigate('RATING');
    }

    React.useEffect(() => {
        getItemsFromCart();
    }, []);

    /**Adding products to cart*/
    const getItemsFromCart = async () => {
        const URL = "http://172.19.142.121:7000/api/customers/carts";
        try {
            const token = await AsyncStorage.getItem('token')
            const res = await axios.get(URL,
                { headers: { Authorization: token } });
            setCarts(res.data.output)
            console.log();
            console.log("New Data", res.data.output);
        } catch (error) {
            console.log(error.message);
        }
    };

    /**Adding orders to cart*/
    const makeorder = async (carts) => {

        console.log("my carts", carts);
        const URL = "http://172.19.142.121:7000/api";
        try {
            const token = await AsyncStorage.getItem('token')
            await axios.post(URL, { carts, farmer: farmerID, itemPrice },
                { headers: { Authorization: token } });

            alert("added to your cart successfully!")
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        <View style={styles.container} >
            <TouchableOpacity style={[styles.centerElement, styles.checkout]}
                    onPress={goToRating}>
                    <Text style={{ color: 'black' }}>rate your exprience</Text>
                </TouchableOpacity>
            <View style={[styles.centerElement, { width: 700 }]}>
                <TouchableOpacity style={[styles.centerElement, styles.checkout]}
                    onPress={makeorder}>
                    <Text style={{ color: 'black' }}>make order</Text>
                </TouchableOpacity></View>
            <Text style={styles.htext}>
                Your Orders
            </Text>
            <FlatList
                data={carts}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    totalPrice += item.price
                    setItemPrice(totalPrice)
                    return (
                        <View style={styles.flatview}>
                            <Text style={styles.name}>{item.title}</Text>
                            <Text style={styles.email}>{item.price}</Text>
                        </View>
                    )

                }}
                keyExtractor={item => item._id}
            />
            <Text>Your Total Price: {itemPrice}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    htext: {
        marginTop: 10,
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    },
    centerElement: { justifyContent: 'center', alignItems: 'center' },
    checkout: { backgroundColor: 'orange', width: 100, height: 25, borderRadius: 5 }
});

export default Payment;