import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Tweet from './Tweet';

const Tweets = () => {
  const tweetList = [{
     'fullName': 'Kira',
     'userName': 'KizPie',
     'tweet': 'This Tweet was Tweeted using Tweepy and Twitter API v2!',
     'Date': 'Aug 15'     
  },
  {
    'fullName': 'Kira',
    'userName': 'KizPie',
    'tweet': 'Magic 8 Ball says: Very doubtful.',
    'Date': 'Aug 15'    
 }]  
  return (
    <ScrollView  vertical> 
      <View>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="Would also be cool to have native support for seed list mirrors on 'maintained' large websites that won't get IP blocked. (Content could get delisted from sites, but more work to make happen)" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
        <Tweet fullName="Kira" userName="KizPie" tweet="This Tweet was Tweeted using Tweepy and Twitter API v2!" date="Aug 15"/>
      </View>    
    </ScrollView>
  )
}

export default Tweets;