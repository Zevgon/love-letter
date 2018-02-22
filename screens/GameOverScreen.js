import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import socket from '../socket';

class GameOverScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
    gesturesEnabled: false,
  };

  handleRestart = () => {
    socket.emit('restart');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game.status === 'PLAYING' && nextProps.game.status !== this.props.game.status) {
      nextProps.navigation.replace('Game');
    }
  }

  render() {
    const { game: { id, players }, name } = this.props;
    const self = players.find((player) => name === player.name);
    return (
      <View style={styles.screen}>
        <Text style={[styles.title, styles.largeMarginBottom]}>
          You {self.lost ? 'lose' : 'win'}!
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleRestart}
            color="#000"
            title="Restart."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
            disabledStyle={styles.disabledStyle}
          />
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  game: state.game,
  name: state.name,
});

export default connect(mapStateToProps)(GameOverScreen);
