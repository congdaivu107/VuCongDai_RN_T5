import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import S1 from './scr/S1'
import S2 from './scr/S2'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <stack.Navigator mode='modal'>
      <stack.Screen options={ {headerShown:false}} name='S1' component={S1}></stack.Screen>
      <stack.Screen options={ {headerShown:false}} name='S2' component={S2}></stack.Screen>
    </stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
