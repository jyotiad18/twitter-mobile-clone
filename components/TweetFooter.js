import { View, Text } from 'react-native'
import { ChatIcon, HeartIcon, ShareIcon, RefreshIcon } from 'react-native-heroicons/outline';

const TweetFooter = ({ messages, retweets, likes, shares}) => {
  return ( 
    <View className="flex-row justify-between mt-3">
        <View className="flex-row items-center space-x-1">
            <ChatIcon size={25} color="gray"/>
            <Text className="text-gray-600">{messages}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <RefreshIcon size={25} color="gray"/>
            <Text className="text-gray-600">{retweets}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <HeartIcon size={25} color="gray"/>
            <Text className="text-gray-600">{likes}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <ShareIcon size={25} color="gray"/>
            <Text className="text-gray-600">{shares}</Text>                   
        </View>                               
    </View>                                       
  )
}

export default TweetFooter;