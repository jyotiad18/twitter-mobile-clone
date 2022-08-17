import { View, Text, Image } from 'react-native'
import React from 'react'
import TweetFooter  from './TweetFooter';

const Tweet = ({ fullName, userName, tweet, date }) => {
  return (
    <View className="flex-row justify-between p-4 space-x-4 border-b border-gray-400">
      <Image source={{uri: 'https://links.papareact.com/wru' }} 
            className="h-14 w-14 bg-gray-300 p-4 rounded-full"
         />

        <View className="flex-1">
            <View>
                <View className="flex-row items-center space-x-1">
                    <Text className="font-bold text-lg">{fullName}</Text>
                    <Text className="text-gray-400 text-md">@{userName}</Text>
                    <Text className="text-gray-400 text-md">. {date}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Text className="text-[14px] font-medium">{tweet}</Text>
                </View>
                <View className="mt-2">
                    <Image source={{uri: 'https://links.papareact.com/wru' }} 
                            className="h-[300px] bg-gray-500 w-full rounded-md"
                    />
                </View>
            </View>
            <TweetFooter messages={2} retweets={102} likes={100} />
        </View>
    </View>
  )
}

export default Tweet;
