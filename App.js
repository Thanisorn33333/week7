import react from 'react';
import List from './list'
import Detail from './detail'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





export default function App() {
  const Stack = createStackNavigator()
  return (
      
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List'>
                <Stack.Screen name="List" component={List}
                options={{headerTitle:'หน้าเเรก', headerBackTitle:'' }}
                /> 
                <Stack.Screen name="Detail" component={Detail}
                options={{headerTitle:'รายละเอียดสินค้า', headerBackTitle:''}}
                />  
            </Stack.Navigator>
        </NavigationContainer>
  );
}
