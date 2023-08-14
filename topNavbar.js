import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import logo from './assets/temp-kc-logo.png'; 

function topNavbar() {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Image source={logo} style={{ width: 100, height: 30 }} />   
      <TouchableOpacity onPress={() => navigation.navigate('chatScreen')}>
        <Icon name="chatbubbles-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('notificationsScreen')}>
        <Icon name="notifications-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('settingsScreen')}>
        <Icon name="settings" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default topNavbar;
