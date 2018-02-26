import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Picker } from 'react-native-picker-dropdown';
import { Button } from 'react-native-elements';
import HistoryModal from './HistoryModal';
import { showHistory } from '../reducers/actions';
import styles from './styles';
import socket from '../socket';
import {
  GUARD,
  PRIEST,
  BARON,
  HANDMAID,
  PRINCE,
  KING,
  COUNTESS,
  PRINCESS,
  CARD_ID_TO_NAME,
} from '../constants';

class GameScreen extends React.Component {
  static propTypes = {
    game: PropTypes.object,
    navigation: PropTypes.object,
    name: PropTypes.string,
    dispatch: PropTypes.func,
  };

  static navigationOptions = {
    headerStyle: { display: 'none' },
    gesturesEnabled: false,
  };

  state = {
    shouldChooseTarget: false,
    allowChooseSelf: null,
    selectedTarget: null,
    chosenCardId: null,
    changeHand: null,
    guess: PRIEST,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.game.status === 'OVER' && nextProps.game.status !== this.props.game.status) {
      nextProps.navigation.replace('GameOver');
    }
  }

  getRightIcon = (player) => {
    if (player.isProtected) {
      return { name: 'shield', type: 'entypo', color: '#000' };
    } else if (player.lost) {
      return { name: 'cross', type: 'entypo', color: '#000' };
    }
    return null;
  }

  handleTargetSelect(targetName) {
    if (!this.state.shouldChooseTarget) {
      return;
    }
    if (!this.state.allowChooseSelf && targetName === this.props.name) {
      return;
    }
    this.setState({
      selectedTarget: targetName,
    });
  }

  handleAct(chosenCardId, changeHand) {
    this.setState({
      chosenCardId,
      changeHand,
      selectedTarget: null,
    });
    switch (chosenCardId) {
      case PRIEST:
      case BARON:
      case KING:
        this.setState({
          shouldChooseTarget: true,
          allowChooseSelf: false,
        });
        break;
      case PRINCE:
        this.setState({
          shouldChooseTarget: true,
          allowChooseSelf: true,
        });
        break;
      case PRINCESS:
      case COUNTESS:
      case HANDMAID:
        this.setState({
          shouldChooseTarget: false,
          allowChooseSelf: null,
        });
        break;
      case GUARD:
        this.setState({
          shouldChooseTarget: true,
          allowChooseSelf: false,
        });
        break;
      default:
        break;
    }
  }

  handlePlayCard = () => {
    if (this.state.shouldChooseTarget && !this.state.selectedTarget && this.validTargetExists()) {
      return;
    }
    this.setState({
      shouldChooseTarget: false,
      allowChooseSelf: null,
      selectedTarget: null,
      chosenCardId: null,
      changeHand: null,
      guess: '2',
    });
    socket.emit('act', {
      changeHand: this.state.changeHand,
      targetName: this.state.selectedTarget,
      guessCardId: this.state.guess,
    });
  }

  handleDisabled = (maybeDisabledCardId, otherCardId) => (
    otherCardId === COUNTESS && [KING, PRINCE].includes(maybeDisabledCardId)
  )

  validTargetExists() {
    const { players } = this.props.game;
    const numTargets = players.filter((player) => (!player.lost && !player.isProtected)).length;
    return this.state.allowChooseSelf ? numTargets > 0 : numTargets > 1;
  }

  render() {
    const {
      game: {
        players, currentPlayer, currentCardId, history, cardNum,
      },
      name,
    } = this.props;
    const self = players.find((player) => name === player.name);
    const current = name === currentPlayer.name;
    return (
      <View style={styles.screen}>
        <Button
          onPress={() => this.props.dispatch(showHistory())}
          title="Show history"
          fontFamily="essonnes"
          backgroundColor="transparent"
          color="#000"
        />
        <HistoryModal show history={history} />
        <Text style={styles.content}>
          {currentPlayer ? 'Current Player:' : null}
        </Text>
        <Text style={[styles.subtitle, styles.marginSmall]}>
          {currentPlayer ? currentPlayer.name : null}
        </Text>
        <Text style={styles.content}>
          Cards remaining: {cardNum}
        </Text>
        <View style={[styles.leftAlign, styles.leftAlignNarrowContainer]}>
          <Text style={styles.content}>Players:</Text>
          {players.map((player) => (
            <Button
              key={player.name}
              disabled={player.isProtected || player.lost}
              color="#000"
              title={player.name}
              backgroundColor={this.state.selectedTarget === player.name ? '#fff' : 'transparent'}
              fontSize={22}
              fontFamily="essonnes"
              icon={player.name === name ? { name: 'user', type: 'feather', color: '#000' } : null}
              iconRight={this.getRightIcon(player)}
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
                title={currentPlayer.cardName}
                disabled={this.handleDisabled(currentPlayer.cardId, currentCardId)}
                backgroundColor={this.state.changeHand ? '#fff' : 'transparent'}
                fontSize={26}
                fontFamily="essonnes"
                onPress={() => { this.handleAct(currentPlayer.cardId, true); }}
              />
              <Button
                color="#000"
                title={CARD_ID_TO_NAME[currentCardId]}
                disabled={this.handleDisabled(currentCardId, currentPlayer.cardId)}
                backgroundColor={this.state.changeHand === false ? '#fff' : 'transparent'}
                fontSize={26}
                fontFamily="essonnes"
                onPress={() => { this.handleAct(currentCardId, false); }}
              />
            </View>
          ) : (
            <View style={[styles.leftAlign]}>
              <Text style={styles.content}>Your hand:</Text>
              <Text style={[styles.contentLarge, styles.marginSmall]}>{self.cardName}</Text>
            </View>)}
        </View>
        <View style={{ alignItems: 'flex-start' }}>
          {this.state.chosenCardId === GUARD &&
            <Picker
              selectedValue={this.state.guess}
              onValueChange={(itemValue) => this.setState({ guess: itemValue })}
              style={{ alignSelf: 'stretch', backgroundColor: 'transparent', height: 50 }}
              prompt="Select your guess"
              textStyle={{ fontSize: 22, fontFamily: 'essonnes' }}
              cancel
            >
              <Picker.Item label="Priest" value={PRIEST} />
              <Picker.Item label="Baron" value={BARON} />
              <Picker.Item label="Handmaid" value={HANDMAID} />
              <Picker.Item label="Prince" value={PRINCE} />
              <Picker.Item label="King" value={KING} />
              <Picker.Item label="Countess" value={COUNTESS} />
              <Picker.Item label="Princess" value={PRINCESS} />
            </Picker>
          }
          {current &&
            <Button
              color="#000"
              title="Confirm."
              backgroundColor="transparent"
              fontSize={26}
              fontFamily="essonnes"
              onPress={this.handlePlayCard}
            />
          }
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
