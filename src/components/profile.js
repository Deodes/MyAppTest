import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hs, vs} from '../styles/scaling';
import {normalize} from '../styles/normalize';

export const Profile = ({path, name, character}) => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={{uri: path}} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.character} numberOfLines={2}>
        {character}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hs(60),
  },
  image: {
    backgroundColor: 'gray',
    height: vs(90),
    borderRadius: 10,
    marginBottom: vs(5),
  },
  name: {
    fontSize: 10,
    marginBottom: vs(4),
  },
  character: {
    fontSize: normalize(6),
  },
});
