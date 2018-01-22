import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import socket from '../socket';

class GameScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  state = {
    chooseTarget: false,
    allowChooseSelf: null,
    selectedTarget: null,
    selectedCard: null,
    changeHand: null,
    guess: '2',
  };

  handleTargetSelect(targetName) {
    if (!this.state.chooseTarget) {
      return;
    }
    if (!this.state.allowChooseSelf && targetName === this.props.name) {
      return;
    }
    this.setState({
      chooseTarget: false,
      selectedTarget: targetName,
      allowChooseSelf: null,
    });
  }

  handleAct(chosenCardId, changeHand) {
    this.setState({
      selectedCard: chosenCardId,
      changeHand,
      selectedTarget: null,
    });
    switch (chosenCardId) {
      case 'Priest':
      case 'Baron':
      case 'King':
        this.setState({
          chooseTarget: true,
          allowChooseSelf: false,
        });
        break;
      case 'Prince':
        this.setState({
          chooseTarget: true,
          allowChooseSelf: true,
        });
        break;
      case 'Princess':
      case 'Countess':
      case 'Handmaid':
        break;
      case 'Guard':
        this.setState({
          chooseTarget: true,
          allowChooseSelf: false,
        });
        break;
      default:
        break;
    }
  }

  handlePlayCard = () => {
    socket.emit('act', {
      changeHand: this.state.changeHand,
      targetName: this.state.selectedTarget,
      guessCardId: this.state.guess,
    });
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
              key={player.name}
              color="#000"
              title={player.name}
              backgroundColor={this.state.selectedTarget === player.name ? '#fff' : 'transparent'}
              fontSize={22}
              fontFamily="essonnes"
              iconRight={player.name === name ? { name: 'user', type: 'feather', color: '#000' } : null}
              onPress={() => { this.handleTargetSelect(player.name); }}
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
                backgroundColor={this.state.changeHand ? '#fff' : 'transparent'}
                fontSize={26}
                fontFamily="essonnes"
                onPress={() => { this.handleAct(currentPlayer.card, true); }}
              />
              <Button
                color="#000"
                title={currentCardId}
                backgroundColor={this.state.changeHand === false ? '#fff' : 'transparent'}
                fontSize={26}
                fontFamily="essonnes"
                onPress={() => { this.handleAct(currentCardId, false); }}
              />
            </View>
          ) : (<View style={[styles.leftAlign]}>
            <Text style={styles.content}>Your hand:</Text>
            <Text style={[styles.contentLarge, styles.marginSmall]}>{self.card}</Text>
          </View>)}
        </View>
        <View style={{ alignItems: 'flex-start' }}>
          <Picker
            selectedValue={this.state.guess}
            onValueChange={(itemValue) => this.setState({ guess: itemValue })}
            style={{ width: 150, height: 150 }}
          >
            <Picker.Item label="Priest" value="2" />
            <Picker.Item label="Baron" value="3" />
            <Picker.Item label="Handmaid" value="4" />
            <Picker.Item label="Prince" value="5" />
            <Picker.Item label="King" value="6" />
            <Picker.Item label="Countess" value="7" />
            <Picker.Item label="Princess" value="8" />
          </Picker>
          <Button
            color="#000"
            title="Confirm."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
            onPress={this.handlePlayCard}
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

export default connect(mapStateToProps)(GameScreen);
