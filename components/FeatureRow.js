import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColor } from '../theme'
import RestaurantCard from './RestaurantCard'

export default function FeatureRow({id, title, restaurants, description}) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg">
                {title}
            </Text>
            <Text className="text-xs text-gray-500">
                {description}
            </Text>
        </View>

        <TouchableOpacity>
            <Text style={{ color: themeColor.text }}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{  
            paddingHorizontal: 15
        }}

        className="overflow-visible py-5"
      >
        {
            restaurants.map((restaurant, id) => {
                return (
                    <RestaurantCard 
                        item={restaurant}
                        key={id}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  )
}