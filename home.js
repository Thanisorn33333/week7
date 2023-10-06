import React from "react-native"
 import {StyleSheet,View,Text,Button} from "react-native"
 import globalstyles from "./global-styles";




 export default function Home ({navigation}){
   
   return(
    <View style={globalstyles.container}>
    <Text style={globalstyles.font}>Home Screen </Text>
    <Button title ="go to About" onPress={() => navigation.navigate("About")}
    />
    <Button title ="ข้อมูลสินค้า" 
    onPress={() => navigation.navigate    ("Contact",{
      id:123456789,                                   //number
      name:'Thanisorn',                               //string
      married:false,                                   //boolean  
      phone:['068-123-7891','789-123-4560'],           //array
      education: {                                   //object
        bachelorsDegree:'Information System',
        mastersDegree:'IT'
      },

    })}/>
    </View>
     
   )
 }










