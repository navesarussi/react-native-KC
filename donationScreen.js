import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import styles from './styles';

const DonationScreen = ({navigation}) => {

  React.useLayoutEffect(() => {
   navigation.setOptions({ title: 'All Donation', headerTitleAlign: 'center', });
 }, [navigation]);

  const buttons = [
    { id: 1, title: 'כסף' },
    { id: 2, title: 'זמן' },
    { id: 3, title: 'חפצים' },
    // Add more buttons...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {buttons.map(button => (
          <TouchableOpacity key={button.id} style={styles.button}>
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DonationScreen;
