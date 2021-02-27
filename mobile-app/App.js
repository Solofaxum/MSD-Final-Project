/**installed expo liabraries */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


/**self made imported components/screens */
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList'
import GetFarmers from './components/GetFarmers';
import CheckOut from './components/ShoppingCart';
import Payment from './components/paymentpage';
import Profile from './components/Profile';
import AllUsersPage from './components/HomePage';
import CartList from './components/ShoppingCart';
import Rating  from './components/rating';



// const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * Stack Navigator
 */

const Home = () => (
  <Stack.Navigator initialRouteName='ABOUTUS'>
    <Stack.Screen name="SIGNIN" component={SignIn} options={{ title: "Sign In" }} />
    <Stack.Screen name="SIGNUP" component={SignUp} options={{ title: "Sign Up" }} />
    <Stack.Screen name="RATING" component={Rating} options={{ title: "Sign Up" }} />
    <Stack.Screen name="ABOUTUS" component={AllUsersPage} options={{ title: "About Us" }} />
    <Stack.Screen name="PROFILE" component={Profile} options={{ title: "Your Profile" }} />
    <Stack.Screen name="FARMERS" component={GetFarmers} options={{ title: "List of Farmers" }} />
    <Stack.Screen name="PRODUCTSLIST" component={ProductList} options={{ title: "List of Products" }} />
    <Stack.Screen name="CARTLIST" component={CartList} options={{ title: "List of products in your cart" }} />
    <Stack.Screen name="CHECKOUT" component={CheckOut} options={{ title: "List of completed orders" }} />
    <Stack.Screen name="PAYMENT" component={Payment} options={{ title: "List of completed orders" }} />
  </Stack.Navigator>
);


/**
 * tab navigator
 */
const Tabnav = () => (
  <Tabs.Navigator initialRouteName='HOME'>
    <Tabs.Screen name="HOME" component={Home} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name='md-home' color={color} size={size} />
      )
    }} />

    <Tabs.Screen name="SIGNUP" component={SignUp}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='md-people' color={color} size={size} />
        )
      }} />
  </Tabs.Navigator>
)



/**
 * main navigator
 */

export default function App() {
  return (
    <NavigationContainer>
      <Tabnav />
    </NavigationContainer>

  );
}



