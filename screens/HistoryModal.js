import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { hideHistory } from '../reducers/actions';
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
          <Text style={styles.content}>This is content inside of modal component</Text>
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
