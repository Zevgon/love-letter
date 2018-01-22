import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import CreateGameScreen from './screens/CreateGameScreen';
import JoinGameScreen from './screens/JoinGameScreen';
import WaitingRoomScreen from './screens/WaitingRoomScreen';
import GameScreen from './screens/GameScreen';

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  CreateGame: { screen: CreateGameScreen },
  JoinGame: { screen: JoinGameScreen },
  WaitingRoom: { screen: WaitingRoomScreen },
  Game: { screen: GameScreen },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      essonnes: require('./assets/fonts/essonnes.otf'),
    });
    await Font.loadAsync({
      essonneslight: require('./assets/fonts/essonnes-light.otf'),
    });
    this.setState({
      loading: false,
    });
  }

  render() {
    return !this.state.loading && (
      <Provider store={store}>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <Navigator style={{ backgroundColor: '#fff' }} />
        </View>
      </Provider>
    );
  }
}
