import React from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    View,
    Text,
    KeyboardAwareScrollView,
    AsyncStorage,
    ScrollView
} from 'react-native';
import axios from "axios";
import MarginController from './MarginController';
import Constants from 'expo-constants';


const GetFarmers = (props) => {

    const [farmers, setFarmers] = React.useState({ data: [] });

    /** navigate results to product list screen*/
    const goToProducts = (item) => {
        props.navigation.navigate('PRODUCTSLIST', { output: item })
    }

    const renderItem = (data) => {
        if (data.item.role !== "superuser")
            return ( <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <TouchableOpacity 
                    onPress={() => goToProducts(data.item)}>
                    <View style={styles.itemListContainer}>
                        <Text style={styles.textStyle}>{data.item.farmname}</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
    </SafeAreaView>
            )
    }

    /**feching farmers list */
    const fetchlist = async () => {
        const URL = "http://172.19.142.121:7000/api/customers/farmers";

        try {
            const token = await AsyncStorage.getItem('token')
            const res = await axios.get(URL,
                { headers: { Authorization: token } });
            setFarmers(res.data.output)
        } catch (error) {
            console.log(error.message);
        }
    };

    React.useEffect(() => {
        fetchlist();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Click to see List of farmer products</Text>
                <FlatList
                    data={farmers}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
    title: {
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
        backgroundColor: "green",
        color: '#fff',
        fontSize: 28,

    },

    itemListContainer: {
        paddingVertical: 5,
        margin: 3,
        flexDirection: "row",
        backgroundColor: "#192338",
        justifyContent: "flex-start",
        alignItems: "center",
        zIndex: -1
    },
    textStyle: {
        marginTop: 10,
        marginBottom: 20,
        width: 250,
        borderRadius: 20,
        // backgroundColor: "#00BFFF",
        textAlign: "center",
        color: 'darkblue',
        fontSize: 28,
        borderStyle: "solid"
    }


});
export default GetFarmers;