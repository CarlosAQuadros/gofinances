import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Dashboard() { 
    return(
  <View style={styles.container}>
      <Text>
        React Native
      </Text>
  </View>
    ) 
}

const styles =StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            margin:10
        }


})

   