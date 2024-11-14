import React from 'react';
import {View, StyleSheet} from 'react-native';

import Footer from '../components/Footer';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bababa',
  },
});

export default function MainLayout({children}) {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
}
