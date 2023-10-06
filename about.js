import React from "react-native"
import {StyleSheet,View,Text,Button} from "react-native"
import globalstyles from "./global-styles";




 export default function About ({navigation}){
   
   return(
    <View style={globalstyles.container}>
    <Text>About Screen </Text>
    <Button title ="go to Contact" 
    onPress={() => navigation.navigate("Contact")}/>
    </View>
   )
 }