import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>This is the footer</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    width: '95%',
    height: 50,
    bottom: 8,
    borderLeftColor: '#969696',
    borderTopColor: '#c8c8c8',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    borderWidth: 4,

    backgroundColor: '#bababa',
  },
  text: {
    fontSize: 20,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
