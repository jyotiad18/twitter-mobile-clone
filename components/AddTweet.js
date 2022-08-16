import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MicrophoneIcon, PhotographIcon, SparklesIcon, CameraIcon } from 'react-native-heroicons/outline';
import AddTweetItem from './AddTweetItem';

const AddTweet = () => {

  const [isDisplay, setIsDisplay] = useState(false);

  return (         
            <View className={`absolute bg-gray-100 opacity-70 w-full h-full bottom-0 z-10 justify-end items-end space-y-2 pb-28`}>
                <AddTweetItem title="Spaces" Icon={MicrophoneIcon} />                 
                <AddTweetItem title="Photos" Icon={CameraIcon} />
                <AddTweetItem title="Gifs" Icon={PhotographIcon} />
                <AddTweetItem title="Tweet" Icon={SparklesIcon} />
            </View>        
  )
}

export default AddTweet;