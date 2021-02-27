import React from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    View,
    Text,
    AsyncStorage
} from 'react-native';
import axios from "axios";



const GetFarmers = (props) => {

    const [farmers, setFarmers] = React.useState({ data: [] });

    /** navigate results to product list screen*/
    // const goToProducts = (item) => {
    //     props.navigation.navigate('PRODUCTSLIST', { output: item })
    // }

    const renderItem = (data) => {
        if (data.item.role !== "superuser")
            return ( <View>
                <TouchableOpacity style={styles.button}
                    onPress={() => goToProducts(data.item)}>
                    <View style={styles.itemListContainer}>
                        <Text style={styles.textStyle}>{data.item.farmname}</Text>
                        <Text style={styles.rating}>Your Rating</Text>
                    </View>
                </TouchableOpacity>
                 <View style={styles.stars}>
                 {[1, 2, 3, 4, 5].map((i) => {
                   return (
                     <TouchableOpacity
                       onPress={() => setReview({ ...review, rating: i })}
                       style={styles.starButton}
                       key={i}
                     >
                       <Icon
                         name="star"
                         size={40}
                         color={i <= review.rating ? "#FFD64C" : "#CCCCCC"}
                       />
                     </TouchableOpacity>
                   );
                 })}
               </View>
               <TextInput
                 placeholder="Review here"
                 onChangeText={(comment) => setReview({ ...review, comment })}
                 value={review.comment}
                 style={[styles.input, { height: 100 }]}
                 multiline={true}
                 numberOfLines={6}
               />
               <TouchableOpacity
                 style={styles.submitButton}
                 onPress={submitReview}
                 disabled={review.submitting}
               >
                 <Text style={styles.submitButtonText}>Submit Review</Text>
               </TouchableOpacity>
               {review.submitting && (
                 <ActivityIndicator
                   size="large"
                   color="#0066CC"
                   style={{ padding: 10 }}
                 />
               )}
             </View>
             
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
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Click to see List of farmer products</Text>
                <FlatList
                    data={farmers}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#192638",
        paddingVertical: 50,
        position: "absolute",
        alignItems: "center",

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
        backgroundColor: "#00BFFF",
        textAlign: "center",
        color: 'darkblue',
        fontSize: 28,
        borderStyle: "solid"
    }


});
export default GetFarmers;