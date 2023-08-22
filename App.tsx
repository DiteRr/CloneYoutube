import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/VideoList/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor:'#FFF'},
        headerBackVisible: false,
      }} 
      initialRouteName="Home"
      >
      <Stack.Screen 
        options={{ headerShown: false}} 
        name="HomeScreen" 
        component={HomeScreen} 
        initialParams={{}} 
      />

      <Stack.Screen 
        options={{ headerShown: false}} 
        name="VideoScreen" 
        component={VideoScreen} 
        initialParams={{}} 
      />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App;