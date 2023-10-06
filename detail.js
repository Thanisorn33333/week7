import React from "react-native"
import {StyleSheet,View,Text,Button} from "react-native"
import globalstyles from './global-styles';

 export default function Detail ({route,navigation}){
   let name = route.params.name || ''
   
   return(
    <View style={globalstyles.continue}>
    <Text>{name}</Text>
    
    </View>
   )
 }