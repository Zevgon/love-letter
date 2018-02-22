import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import socket from './socket';
import HomeScreen from './screens/HomeScreen';
import CreateGameScreen from './screens/CreateGameScreen';
import JoinGameScreen from './screens/JoinGameScreen';
import WaitingRoomScreen from './screens/WaitingRoomScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import rootReducer from './reducers/index';
import { receiveGameStats } from './reducers/actions';

const store = createStore(rootReducer);

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  CreateGame: { screen: CreateGameScreen },
  JoinGame: { screen: JoinGameScreen },
  WaitingRoom: { screen: WaitingRoomScreen },
  Game: { screen: GameScreen },
  GameOver: { screen: GameOverScreen },
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

  componentDidMount() {
    socket.on('gameStats', (gameStats) => {
      store.dispatch(receiveGameStats(gameStats));
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
