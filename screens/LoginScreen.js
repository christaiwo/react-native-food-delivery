import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { themeColor } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    // const { width, height } = Dimensions.get('window');
    const { width, height } = Dimensions.get('window');
    const imageHeight = height / 2;

    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex h-full w-full justify-center items-center">
        <View className="flex flex-col h-full w-full">
            <Image source={require('../assets/images/bikeGuy.png')}  resizeMode='cover' className="w-full h-2/3 -mt-8" />
            
            <View style={{ backgroundColor: themeColor.bgColor(1) }} className="flex-1 -mt-32 rounded-t-2xl px-1 py-2 flex flex-col">

                <View className="h-12">
                    <TextInput placeholder='Email' className="border-2 border-neutral-800 bg-white/20 h-full rounded-lg " />
                </View>
                <View className="h-12 mt-10">
                    <TextInput placeholder='Email' className="border-4 border-neutral-800 h-full " />
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('Home')} className="w-full bg-green-400 rounded-md mt-10 py-2 px-2">
                    <Text className="text-center">Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}