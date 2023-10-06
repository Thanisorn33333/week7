import React from "react-native"
import {StyleSheet,View,Text,Button} from "react-native"
import globalstyles from "./global-styles";




 export default function Contact ({route, navigation}){
   let id = route.params.id || 0
   let name = route.params.name || ''
   let phone = ''
   if (route.params.phone){
     phone =route.params.phone.join(',')
   }
   let bdg = '', mdg = ''
   if(route.params.education){
     bdg = route.params.education.bachelorsDegree || ''
     mdg = route.params.education.mastersDegree || ''
   }
   let info = ` 
            Detail: ${'\n'}
            id: ${id}
            name: ${name}
            price: ${price}
            phone: ${phone}
            bachelor's degree: ${bdg}
            master's degree : ${mdg}
   `
   return(
    <View style={globalstyles.container}>
    <Text>{info} </Text>
     </View>
   )
 }