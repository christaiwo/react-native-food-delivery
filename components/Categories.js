import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { categories } from '../constants/index';
import { useEffect, useState } from 'react';
// import { getCategories } from '../api';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        // getCategories().then(data=>{
        //     console.log(data);
        // })
    }, []);
  return (
    <View className="mt-4">
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{ 
                paddingHorizontal: 15
             }}
        >

            {
                categories.map((category, id) =>  {
                    return (
                        <View key={id} className="flex justify-center items-center mr-6">
                            <TouchableOpacity
                                onPress={() => setActiveCategory(id)}
                                className={`${activeCategory == id? 'bg-gray-600' : 'bg-gray-200'} p-1 rounded-full`}
                            >
                                <Image style={{ width: 45, height: 45 }} source={category.image} />
                            </TouchableOpacity>
                            <Text className={`${activeCategory == id? 'font-semibold text-gray-800' : 'text-gray-500'} text-sm`}>{category.name}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}