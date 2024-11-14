import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    height: '100%',
  },
});

// submitStyle: {
//   width: 100,
//   backgroundColor: '#cacaca',
//   borderWidth: 4,
//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
// },
// submitText: {
//   textAlign: 'center',
// },
// emptyText: {top: 350, fontSize: 34, textAlign: 'center'},
// errorStyle: {fontSize: 14, color: 'red'},
// typeButtons: {flexDirection: 'row'},
// typeButtonHighlight: {
//   height: 30,
//   width: 100,
//   borderWidth: 2,
//   backgroundColor: '#6066ca',
// },
// typeButton: {height: 30, width: 100, borderWidth: 2},
// typeButtonText: {
//   textAlign: 'center',
//   textAlignVertical: 'center',
//   fontSize: 16,
// },
// safeAreaAdd: {width: '100%', height: '100%', backgroundColor: '#bababa'},
// addView: {height: 400, justifyContent: 'space-around', gap: 4},
// addTitle: {
//   backgroundColor: '#cacaca',
//   borderWidth: 4,
//   padding: 4,
//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
// },
// addTitleText: {fontSize: 24},
// addDesc: {
//   backgroundColor: '#cacaca',
//   borderWidth: 4,
//   padding: 4,
//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
//   height: 200,
// },
// addDescText: {
//   textAlignVertical: 'top',
//   fontSize: 18,
//   height: 200,
//   flexWrap: 'wrap',
// },
// addAmount: {
//   backgroundColor: '#cacaca',
//   borderWidth: 4,
//   padding: 4,
//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
// },
// addAmountText: {fontSize: 24},
// FAB: {
//   position: 'absolute',
//   width: 50,
//   height: 50,
//   backgroundColor: '#76c46a',
//   bottom: 5,
//   right: 5,
//   borderRadius: 100,
// },
// FABText: {
//   textAlign: 'center',
//   top: 7,
//   fontSize: 24,
//   color: '#FEFEFE',
// },
// transactionStyle: {
//   flexDirection: 'row',

//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
//   borderWidth: 4,
//   padding: 4,

//   height: 45,
//   justifyContent: 'space-between',
// },
// transactionTextStyle: {
//   fontSize: 20,
//   textAlignVertical: 'center',
// },
// safeAreaDetails: {
//   width: '100%',
//   height: '100%',
//   justifyContent: 'center',
//   backgroundColor: '#bababa',
// },
// safeAreaHome: {
//   backgroundColor: '#bababa',
//   width: '100%',
//   height: '100%',
// },
// detailsStyle: {
//   borderWidth: 4,
//   height: 400,
//   justifyContent: 'space-around',
//   marginLeft: 30,
//   marginRight: 30,
//   padding: 8,
//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
// },
// detailsViewStyle: {
//   borderWidth: 4,
//   justifyContent: 'space-around',
//   padding: 8,
//   borderLeftColor: '#969696',
//   borderTopColor: '#c8c8c8',
//   borderRightColor: '#c8c8c8',
//   borderBottomColor: '#969696',
//   backgroundColor: '#aaaaaa',
// },
// detailsTitleStyle: {
//   textAlign: 'center',
//   textAlignVertical: 'center',

//   fontSize: 24,
// },
// detailsDescStyle: {
//   fontSize: 18,
//   height: 200,
// },
// detailsAmountStyle: {
//   textAlign: 'center',
//   textAlignVertical: 'center',
//   fontSize: 18,
// },
