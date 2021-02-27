import React from 'react';
import Separator from "./Separator";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";


const productsList = ({ route: { params }, navigation: { navigate } }) => {
  const results = params.output;


  const goToCartList = () => {
    navigate('PAYMENT', {data:results._id})
  }

  
  /**Adding products to cart*/
  const sendToCart = async (results ) => {
    const URL = "http://172.19.142.121:7000/api/customers/carts";
    try {
      const token = await AsyncStorage.getItem('token')
      await axios.post(URL, results ,
        { headers: { Authorization: token } });
       // Alert.alert("added to your cart successfully!")
      
    } catch (error) {
      console.log(error.message);
    }
  };

  
  return (
    <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <Text style={styles.title}>add products to your cart</Text>
      <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 1 }}>
        <View style={[styles.centerElement, styles.cart]}>
          <TouchableOpacity style={[styles.centerElement, { width: 32, height: 62 }]}
            onPress={() => goToCartList()}><Text>visit cart</Text>
            <Ionicons name="ios-cart" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {results.products ? results.products.map((item, _id) => {
          return (
            <View key={_id} style={styles.mapView}>

              <View style={[styles.centerElement, { width: 60 }]}>
                <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]}
                  onPress={() => navigate('ORDERLIST', {id:item.id})}>
                  <Ionicons name={item.checked == 1 ?
                    "ios-checkmark-circle" : "ios-checkmark-circle-outline"}
                    size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
                </TouchableOpacity>
              </View>

              <View style={styles.imageView}>
                <TouchableOpacity onPress={() => { console.log('image clicked'); }}
                  style={{ paddingRight: 10 }}>
                  <Image source={{ uri: item.image }}
                    style={[styles.centerElement, styles.imageSize]} />
                </TouchableOpacity>

                <View style={styles.list}>
                  <Text style={{ color: 'black', fontSize: 15 }}> {item.title} </Text>
                  <Text style={{ color: 'darkblue' }}> {item.describtion} </Text>
                  <Text style={{ color: 'black', marginBottom: 10 }}> ${item.price} </Text>
                </View>
              </View>

              <View style={[styles.centerElement, { width: 80 }]}>
                <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]}
                  onPress={() => sendToCart(item )}><Text>Add</Text>
                  <Ionicons name="ios-cart" size={25} color="#ee4d2d" />
                </TouchableOpacity>
                
              </View>
            </View>)

        }) : <Text>No products!</Text>}
        <Separator />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centerElement: { justifyContent: 'center', alignItems: 'center' },
  mapView: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120 },
  imageView: { flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' },
  list: { flexGrow: 1, flexShrink: 1, alignSelf: 'center' },
  imageSize: { height: 80, width: 80, backgroundColor: '#eeeeee' },
  listView: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 1, height: 450 },
  cart: { width: 100, marginLeft: 330 },
  title: {fontSize: 22, color: "darkblue", fontWeight: '600' }
});

export default productsList;
