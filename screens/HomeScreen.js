import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import AddTweet from '../components/AddTweet';
import { PlusIcon, ArrowSmUpIcon } from 'react-native-heroicons/outline';
import Tweets from '../components/Tweets';

const HomeScreen = () => { 
  const navigation = useNavigation();  
  const [isTweetDisplay, setIsTweetDisplay] = useState(false); 

  return (
    <SafeAreaView className="bg-white flex-1 pt-10 space-y-2 justify-between"> 
       <Header /> 
       <Tweets />
       <FooterNav />
       {
          isTweetDisplay ? <AddTweet /> : 
          <TouchableOpacity className="absolute flex-row justify-center items-center z-20 
          bg-[#00ACEE] rounded-full w-16 h-16 bottom-20 right-4" onPress={ () => { setIsTweetDisplay(!isTweetDisplay); }}>                   
                <PlusIcon size={30} color="white"/>
         </TouchableOpacity> 
       }   

       <View className="absolute z-20 top-20 left-1/3 rounded-lg p-2 bg-[#00ACEE] flex-row items-center space-x-1">
          <ArrowSmUpIcon size={20} color="white"/>
          <View className="flex-row">
              <Image source={{uri: 'https://links.papareact.com/wru' }} 
                className="h-5 w-5 bg-gray-300 rounded-full border-2 border-white -right-2 z-20" />
              <Image source={{uri: 'https://links.papareact.com/wru' }} 
                className="h-5 w-5 bg-black  rounded-full border-2 border-white -right-1 z-10" />
              <Image source={{uri: 'https://links.papareact.com/wru' }} 
                className="h-5 w-5 bg-white  rounded-full border-2 border-white" />
          </View>
          <Text className="text-white">Tweeted</Text>
       </View>          
    </SafeAreaView>   
  )
}

export default HomeScreen;