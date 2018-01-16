import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CreateGameScreen from './screens/CreateGameScreen';
import JoinGameScreen from './screens/JoinGameScreen';

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  CreateGame: { screen: CreateGameScreen },
  JoinGame: { screen: JoinGameScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Navigator style={{ backgroundColor: '#fff' }} />
      </View>
    );
  }
}
