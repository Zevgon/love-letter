import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { hideHistory } from '../reducers/actions';
import { CARD_ID_TO_NAME, GUARD } from '../constants';
import styles from './styles';

class HistoryModal extends React.Component {
  render() {
    return (
      <Modal
        visible={this.props.showHistory}
        animationType="slide"
        onRequestClose={this.closeModal}
      >
        <View style={styles.screen}>
          <View style={styles.leftAlign}>
            {this.props.history.map((event, idx) => (
              <Text style={styles.content} key={`hi-${idx}`}>
                {event.player.name} played {event.chosenCard.name}
                {event.data.targetName && ` on ${event.data.targetName}`}
                {event.chosenCard.id === GUARD && ` (guess: ${CARD_ID_TO_NAME[event.data.guessCardId]})`}
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

const mapStateToProps = ({ showHistory }) => ({
  showHistory,
});

export default connect(mapStateToProps)(HistoryModal);
