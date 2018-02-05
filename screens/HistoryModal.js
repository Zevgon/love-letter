import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { hideHistory } from '../reducers/actions';
import {
  GUARD,
  PRIEST,
  BARON,
  PRINCE,
  CARD_ID_TO_NAME,
} from '../constants';
import styles from './styles';

class HistoryModal extends React.Component {
  formatEvent = (historyEvent) => {
    console.log(historyEvent);
    const turnPlayerName = historyEvent.player.name;
    const cardPlayed = historyEvent.chosenCard;
    const { targetName } = historyEvent.data;
    const targetInfo = targetName ? ` on ${targetName}` : '';
    const guessInfo = historyEvent.chosenCard.id === GUARD ? ` (guess: ${CARD_ID_TO_NAME[historyEvent.data.guessCardId]})` : '';
    const {
      winnerName,
      loserName,
      winningCardName,
      losingCardName,
      targetPlayerCardName,
    } = historyEvent.result;

    let resultInfo = '';
    console.log('card played id', cardPlayed.id);
    console.log('priest', PRIEST);
    switch (cardPlayed.id) {
      case PRIEST:
        if (this.props.name === turnPlayerName) {
          resultInfo = targetPlayerCardName ? `${targetName}'s card: ${targetPlayerCardName}` : '';
        }
        break;
      case BARON:
        if ([winnerName, loserName].includes(this.props.name)) {
          resultInfo = winnerName ? `${winnerName} (${winningCardName}) beat ${loserName} (${losingCardName})` : '';
        }
        break;
      case PRINCE:
        resultInfo = `${targetName} discarded ${targetPlayerCardName}`;
        break;
      default:
        resultInfo = '';
    }
    const loseInfo = loserName ? ` ${loserName} (${losingCardName}) was eliminated` : '';
    return `${turnPlayerName} played ${cardPlayed.name}${targetInfo}${guessInfo}. ${resultInfo} ${loseInfo}`;
  }

  render() {
    return (
      <Modal
        visible={this.props.showHistory}
        animationType="slide"
        onRequestClose={this.closeModal}
      >
        <View style={styles.screen}>
          <View style={styles.leftAlign}>
            {this.props.history.map((historyEvent, idx) => (
              <Text style={styles.content} key={`hi-${idx}`}>
                {this.formatEvent(historyEvent)}
              </Text>
            ))}
          </View>
          <Button
            onPress={() => this.props.dispatch(hideHistory())}
            title="Close modal"
            color="#000"
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
          />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = ({ showHistory, name }) => ({
  showHistory,
  name,
});

export default connect(mapStateToProps)(HistoryModal);
