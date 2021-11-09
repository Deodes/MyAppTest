import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hs, vs} from '../styles/scaling';
import {normalize} from '../styles/normalize';

export const Card = ({title, path, budget, average, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage
        style={styles.image}
        source={{
          uri: path,
          priority: FastImage.priority.high,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.budget}>$ {budget}</Text>
        <Text style={styles.average}>{average}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: vs(120),
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    elevation: 8,
  },
  image: {
    flex: 0.25,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: 'gray',
    resizeMode: FastImage.resizeMode.cover,
  },
  content: {
    flex: 0.75,
    justifyContent: 'space-between',
    padding: hs(10),
  },
  title: {
    fontSize: normalize(12),
    fontWeight: '700',
  },
  budget: {
    fontSize: normalize(10),
    color: 'gray',
  },
  average: {
    fontSize: normalize(20),
    fontWeight: '700',
  },
});
