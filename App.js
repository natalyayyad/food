import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
   Search : SearchSreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: { // header at the top of each screen
    title: 'Buisness Search',
    },
  }
);

export default createAppContainer(navigator);