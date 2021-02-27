import React from 'react';
import {View, StyleSheet} from 'react-native';


const MarginController = ({children}) => {
    return <View style= {styles.helper}>{children}</View>
};

const styles = StyleSheet.create({
helper: {
    margin: 20
}
})

export default MarginController;