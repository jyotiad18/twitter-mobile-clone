import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import AddTweet from '../components/AddTweet';
import { PlusIcon } from 'react-native-heroicons/outline';

const HomeScreen = () => { 
  const navigation = useNavigation();  
  const [isTweetDisplay, setIsTweetDisplay] = useState(false);
  return (
    <SafeAreaView className="bg-white flex-1 pt-10 space-y-2 justify-between"> 
       <Header />                      
       <FooterNav />
       {
          isTweetDisplay ? <AddTweet /> : 
          <TouchableOpacity className="absolute flex-row justify-center items-center z-20 
          bg-[#00ACEE] rounded-full w-16 h-16 bottom-20 right-4" onPress={ () => { setIsTweetDisplay(!isTweetDisplay); }}>                   
                <PlusIcon size={30} color="white"/>
         </TouchableOpacity> 
       }             
    </SafeAreaView>   
  )
}

export default HomeScreen;