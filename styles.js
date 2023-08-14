import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      margin: 10,
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: '#3498db',
      borderRadius: 10,
      elevation: 5, // For Android shadow
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
 
  export default styles;
  
  