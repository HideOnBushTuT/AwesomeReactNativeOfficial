import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import * as Screens from '../components/views/index';
import Home from '../components/views/Home';
import Discover from '../components/views/Discover';
import Mine from '../components/views/Mine';
import First from '../components/views/First';
import Second from '../components/views/Second';
import Third from '../components/views/Third';

const HomeStack = createStackNavigator({
    Home: Home,
    Discover: Discover,
    Mine: Mine
});

const NumberStack = createStackNavigator({
    First: First,
    Second: Second,
    Third: Third
});

const TabNavigator = createBottomTabNavigator({
    HomeStack: {
      screen: HomeStack,
      path: 'HomeStack',
      navigationOptions: {
        title: 'HomeStack'
      }
    },
    NumberStack: NumberStack,
},
{
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
    swipeEnabled: true,
  }
  );

// export default createAppContainer(TabNavigator);

const TabNavigatorContainer = createAppContainer(TabNavigator);

export default TabNavigatorContainer;