import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MoviesNavigator} from './movies-navigator';
import {FavoritesNavigator} from './favorites-navigator';
import {ROUTES} from '../constants/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabStack = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <TabStack.Navigator screenOptions={{headerShown: false}}>
      <TabStack.Screen
        name={ROUTES.MOVIES_STACK}
        component={MoviesNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="movie-roll" size={24} color={color} />
          ),
          title: 'Movies',
        }}
      />
      <TabStack.Screen
        name={ROUTES.FAVORITES_STACK}
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="star-circle" size={24} color={color} />
          ),
          title: 'Favorites',
        }}
      />
    </TabStack.Navigator>
  );
};
