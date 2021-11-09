import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderRight = ({active, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={active ? 'star' : 'star-border'} size={20} color="#007AFF" />
    </Pressable>
  );
};
