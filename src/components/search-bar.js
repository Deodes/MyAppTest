import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {hs} from '../styles/scaling';
import {normalize} from '../styles/normalize';

export const SearchBar = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: hs(15),
  },
  input: {
    fontSize: normalize(14),
  },
});
