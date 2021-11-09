import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Movies} from '../containers/movies';
import {Details} from '../containers/details';
import {ROUTES} from '../constants/routes';

const MoviesStack = createNativeStackNavigator();

export const MoviesNavigator = () => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name={ROUTES.MOVIES}
        component={Movies}
        options={{
          title: 'Movies',
        }}
      />
      <MoviesStack.Screen name={ROUTES.DETAILS} component={Details} />
    </MoviesStack.Navigator>
  );
};
