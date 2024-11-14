import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.text}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#969696',
    borderTopColor: '#c8c8c8',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    borderWidth: 4,
    padding: 4,
    backgroundColor: '#bababa',
  },
  button: {
    width: 150,
    height: 75,
    borderLeftColor: '#969696',
    borderTopColor: '#c8c8c8',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    borderWidth: 4,
    padding: 4,
    backgroundColor: '#bababa',
  },
  text: {
    fontSize: 20,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
