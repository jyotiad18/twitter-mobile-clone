import { View, Text } from 'react-native'
import React, { useState } from 'react'

const AddTweet = ({ title, Icon}) => {
  return (         
           
        <View className="flex-row items-center  pr-6 justify-between w-[130px] mb-2">
            <Text className="font-bold text-sm"> {title} </Text>
            <View className="flex-row justify-center items-center 
                        bg-white rounded-full w-10 h-10 shadow-sm">                   
                <Icon size={30} color="#00ACEE"/>
            </View>
        </View>                   
  )
}

export default AddTweet;