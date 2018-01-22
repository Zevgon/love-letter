import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import socket from '../socket';

class GameScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  render() {
    const {
      id, status, players, currentPlayer,
    } = this.props.game;
    return (
      <View style={styles.screen}>
        <Text style={[styles.subtitle, styles.largeMarginBottom]}>
          {currentPlayer ? currentPlayer.name : null}
        </Text>
        {players.map((player) => (
          <Text style={[styles.contentMedium, styles.marginSmall]} key={player.id}>
            {player.name}
          </Text>
        ))}
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleStart}
            color="#000"
            title="Ready."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
            disabled={players.length < 2}
            disabledStyle={styles.disabledStyle}
          />
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(GameScreen);
