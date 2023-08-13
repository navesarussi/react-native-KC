// SecondScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SecondScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second Screen</Text>
      <Button
        title="Go to First Screen"
        onPress={() => navigation.navigate('FirstScreen')}/>
    </View>
    
  );
}

export default SecondScreen;
