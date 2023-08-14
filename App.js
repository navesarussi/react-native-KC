// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen'; // Assuming you have the initial screen component
import SecondScreen from './SecondScreen'; // Import the new screen component.
import homeScreen from './homeScreen';
import settingsScreen from './settingsScreen';
import notificationsScreen from './notificationsScreen';
import chatScreen from './chatScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="homeScreen" component={homeScreen} />
        <Stack.Screen name="settingsScreen" component={settingsScreen}/>
        <Stack.Screen name="notificationsScreen" component={notificationsScreen} />
        <Stack.Screen name='chatScreen' component={chatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
