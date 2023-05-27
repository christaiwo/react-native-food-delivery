import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import * as Icon from "react-native-feather";


export default function HomeScreen() {
  return (
    <SafeAreaView>
        <StatusBar barStyle='light-content'/>
        {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 b-2 mt-1">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
            </View>
        </View>
    </SafeAreaView>
  )
}