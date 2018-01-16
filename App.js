import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import HomeScreen from './screens/HomeScreen';
import CreateGameScreen from './screens/CreateGameScreen';
import JoinGameScreen from './screens/JoinGameScreen';
import WaitingRoomScreen from './screens/WaitingRoomScreen';

const store = createStore(rootReducer);

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  CreateGame: { screen: CreateGameScreen },
  JoinGame: { screen: JoinGameScreen },
  WaitingRoom: { screen: WaitingRoomScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <Navigator style={{ backgroundColor: '#fff' }} />
        </View>
      </Provider>
    );
  }
}
