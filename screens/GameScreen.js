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

  handleAct(chosenCardId, changeHand) {
    switch (chosenCardId) {
      case 'Priest':
      case 'Baron':
      case 'King':
        break;
      case 'Princess':
      case 'Countess':
      case 'Handmaid':
      case 'Priest':
        break;
      case 'Guard':
        break;
    }

    // socket.emit('act', { changeHand });
  }

  render() {
    const {
      game: {
        id, status, players, currentPlayer, currentCardId,
      },
      name,
    } = this.props;
    const self = players.find((player) => name === player.name);
    const current = name === currentPlayer.name;
    return (
      <View style={styles.screen}>
        <Text style={styles.content}>
          {currentPlayer ? 'Current Player:' : null}
        </Text>
        <Text style={[styles.subtitle, styles.marginSmall]}>
          {currentPlayer ? currentPlayer.name : null}
        </Text>
        <View style={[styles.leftAlign, styles.leftAlignNarrowContainer]}>
          <Text style={styles.content}>Players:</Text>
          {players.map((player) => (
            <Button
              color="#000"
              title={player.name}
              backgroundColor="transparent"
              fontSize={22}
              fontFamily="essonnes"
              iconRight={player.name === name ? { name: 'user', type: 'feather', color: '#000' } : null}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {current ? (
            <View style={[styles.leftAlign]}>
              <Text style={styles.content}>Select a card:</Text>
              <Button
                color="#000"
                title={currentPlayer.card}
                backgroundColor="transparent"
                fontSize={26}
                fontFamily="essonnes"
              />
              <Button
                color="#000"
                title={currentCardId}
                backgroundColor="transparent"
                fontSize={26}
                fontFamily="essonnes"
              />
            </View>
          ) : (<View style={[styles.leftAlign]}>
            <Text style={styles.content}>Your hand:</Text>
            <Text style={[styles.contentLarge, styles.marginSmall]}>{self.card}</Text>
          </View>)}
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  game: state.game,
  name: state.name,
});

export default connect(mapStateToProps)(GameScreen);
