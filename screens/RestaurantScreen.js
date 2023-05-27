import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColor } from '../theme';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/RestaurantSlice';

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if(item && item.id){
      dispatch(setRestaurant({...item}))
    }
  }, []);
  return (
    <View>
      <CartIcon/>
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-3 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColor.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <View className="flex-row space-x-2 my-1">
                  <View className="flex-row items-center space-x-1">
                      <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                      <Text className="text-green-700">{item.stars}</Text>
                      <Text className="text-gray-700">
                          ({item.reviews} review) . <Text className="font-semibold">{item.category}</Text>
                      </Text>
                  </View>

                  <View className="flex flex-row items-center space-x-1">
                      <Icon.MapPin color='gray' width='15' height='15' />
                      <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
                  </View>
              </View>
              <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, id) => <DishRow item={{ ...dish }} key={id} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}