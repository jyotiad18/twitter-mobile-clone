import { View, Text, Image } from 'react-native'
import React from 'react'
import { HomeIcon, SearchIcon, MicrophoneIcon, UsersIcon, BellIcon, InboxIcon  } from 'react-native-heroicons/outline';

const FooterNav = () => {
  const size = 30;
  return (
    <View className="flex-row justify-between items-center px-4 border-t border-gray-500 py-4">
         <HomeIcon color="black" size={size} />
         <SearchIcon color="black" size={size} />
         <MicrophoneIcon color="black" size={size} />
         <UsersIcon color="black" size={size} />
         <BellIcon color="black" size={size} />
         <InboxIcon color="black" size={size} />
    </View>
  )
}

export default FooterNav;