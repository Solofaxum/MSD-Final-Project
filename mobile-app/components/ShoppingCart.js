import React from 'react';
import Separator from "./Separator";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
  AsyncStorage
} from 'react-native';
import {
  MaterialIcons,
  Ionicons
} from '@expo/vector-icons';
import axios from "axios";

const cartList = ({ route: { params }, navigation: { navigate } }) => {
  const farmerID = params.data;
  
  const [carts, setCarts] = React.useState("");

  
  const goToPayment = () => {
Alert.alert('working.....')
    // navigate('PAYMENT');
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

      console.log("New Data", res.data.output);
    } catch (error) {
      console.log(error.message);
    }
  };

  /**Adding orders to cart*/
  const postOrder = async (carts ) => {
      //Alert.alert("added to your cart successfully!")
    console.log("my carts" , carts);
    const URL = "http://172.19.142.121:7000/api/orders";
    try {
      const token = await AsyncStorage.getItem('token')
      await axios.post(URL,  {carts ,farmer:farmerID},
        { headers: { Authorization: token } });
      
       // Alert.alert("added to your cart successfully!")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    
      <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
        <ScrollView>
        <Text style={styles.title} >Your Cart List</Text>
        <View style={[styles.centerElement, { width: 700 }]}>
       
        <TouchableOpacity style={[styles.centerElement, styles.checkout]}
                              onPress={goToPayment}>
                              <Text style={{ color: 'black' }}>make order</Text>
                          </TouchableOpacity></View>
        {carts ? carts.map((item, _id) => {
          
          return (
            <View key={_id} style={styles.mapView}>
              <Image source={{ uri: item.image }} />
              <View style={[styles.centerElement, { width: 60 }]}>
                <TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]}
                  onPress={() => navigate('ORDERLIST', { id: item.id })}>
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

                  <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => quantityHandler('less', i)}
                      style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                      <MaterialIcons name="remove" size={22} color="#cccccc" />
                    </TouchableOpacity>

                    <Text style={styles.itemQuantity}></Text>
                    <TouchableOpacity onPress={() => quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                      <MaterialIcons name="add" size={22} color="#cccccc" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={[styles.centerElement, { width: 80 }]}>
                <TouchableOpacity style={[styles.centerElement, { width: 40, height: 32 }]}
                  onPress={() => deleteItem(item)}><Text>Delete</Text>
                  <Ionicons name="ios-trash" size={25} color="#ee4d2d" />
                </TouchableOpacity>
              </View>
            </View>)
        }) : <Text>No products!</Text>}
 </ScrollView>
        <Separator />
      

      </View>
   
  );
}

const styles = StyleSheet.create({

  centerElement: { justifyContent: 'center', alignItems: 'center' },checkout: { backgroundColor: 'orange', width: 100, height: 25, borderRadius: 5 },
  mapView: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120 },
  imageView: { flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' },
  list: { flexGrow: 1, flexShrink: 1, alignSelf: 'center' },
  imageSize: { height: 80, width: 80, backgroundColor: '#eeeeee' },
  listView: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 1, height: 450 },
  cart: { width: 100, marginLeft: 330 },
  
  // checkoutView: { flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center' },
  title: { fontSize: 22, color: "darkblue", fontWeight: '600' },
  subtotalPrice: { flexDirection: 'row', paddingRight: 20, alignItems: 'center' },
  selectTicker: { flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center' },
  logout: { marginTop: 10, height: 45, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20,
    width: 100, borderRadius: 30, backgroundColor: "#00BFFF", marginLeft: 300 },
});

export default cartList;