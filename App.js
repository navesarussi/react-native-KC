// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen'; // Assuming you have the initial screen component
import donationScreen from './donationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="donationScreen" component={donationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
