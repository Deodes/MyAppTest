import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Favorites} from '../containers/favorites';
import {Details} from '../containers/details';
import {ROUTES} from '../constants/routes';

const FavoritesStack = createNativeStackNavigator();

export const FavoritesNavigator = () => {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name={ROUTES.FAVORITES}
        component={Favorites}
        options={{
          title: 'Favorites',
        }}
      />
      <FavoritesStack.Screen name={ROUTES.DETAILS} component={Details} />
    </FavoritesStack.Navigator>
  );
};
