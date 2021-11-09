import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {vs} from '../styles/scaling';
import {normalize} from '../styles/normalize';

export const Poster = ({path, title, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <FastImage
          style={styles.image}
          source={{
            uri: path,
            priority: FastImage.priority.high,
          }}
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: vs(550),
    borderRadius: 15,
    backgroundColor: 'gray',
    resizeMode: FastImage.resizeMode.cover,
    marginBottom: vs(10),
  },
  text: {
    fontSize: normalize(18),
    fontWeight: '700',
    textAlign: 'center',
  },
});
