import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => { 
  const navigation = useNavigation();  

  useEffect(() => {
     setTimeout(() => {
        navigation.navigate('Home');
     }, 5000)
  },[])

  return (
    <SafeAreaView className="bg-[#00ACEE] flex-1 justify-center items-center">             
            <View className="space-y-2">
                    <Image source={{uri: 'https://hautsdeseine.croix-rouge.fr/wp-content/uploads/sites/9/2018/12/twitter-logo.png' }} 
                        className="h-40 w-40" />
            </View>
    </SafeAreaView>    
  )
}

export default LoadingScreen;