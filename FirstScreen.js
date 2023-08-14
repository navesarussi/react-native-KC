// FirstScreen.js

import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FirstScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Second Screen2"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('homeScreen')}
      />
    </View>
  );
}

export default FirstScreen;
