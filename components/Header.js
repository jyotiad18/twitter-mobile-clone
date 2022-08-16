import { View, Text, Image } from 'react-native'
import React from 'react'
import { SparklesIcon } from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center px-4 border-b border-gray-500 py-2">
         <Image source={{uri: 'https://links.papareact.com/wru' }} 
            className="h-5 w-5 bg-gray-300 p-4 rounded-full"
         />                       
         <SparklesIcon color="black" size={30} />
    </View>
  )
}

export default Header;