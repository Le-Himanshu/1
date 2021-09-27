import "react-native-gesture-handler";
import React from 'react';
import {  Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainor} from "@react-navigation/native";
import HomeScreen  from "./screens/HomeScreen";
import IssLocation from "./screens/IssLocation";
import MeteorScreen from "./screens/MeteorScreen";
const Stack=createStackNavigator()
function App() {

  return (
 <NavigationContainor>
   <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
   <Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="IssLocation" component={IssLocation}/>
<Stack.Screen name="MeteorScreen" component={MeteorScreen}/>
   </Stack.Navigator>

 </NavigationContainor>

  );
}

export default App

