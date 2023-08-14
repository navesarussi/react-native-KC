// FirstScreen.js

import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FirstScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
      title="Go to all donations"
      onPress={() => navigation.navigate('donationScreen')}/>
    </View>
  );
}

export default FirstScreen;
