import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  console.log(item); 
  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  )
}