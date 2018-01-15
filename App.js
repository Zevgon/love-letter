import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CreateGameScreen from './screens/CreateGameScreen';

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  CreateGame: { screen: CreateGameScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    );
  }
}
