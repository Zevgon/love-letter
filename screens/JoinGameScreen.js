import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  setName,
} from '../reducers/actions';
import styles from './styles';
import socket from '../socket';

class JoinGameScreen extends React.Component {
  static navigationOptions = {
    title: 'Join Game',
    headerStyle: { display: 'none' },
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gameIdInput: '',
      error: null,
    };
  }
  handleJoin = () => {
    if (!this.state.name) {
      this.setState({
        error: 'Must specify name before joining game',
      });
      return;
    } else if (!this.state.gameIdInput) {
      this.setState({
        error: 'Must specify room before joining game',
      });
      return;
    }
    this.props.dispatch(setName(this.state.name));
    socket.emit('join', { id: this.state.gameIdInput, name: this.state.name });
    this.props.navigation.navigate('WaitingRoom');
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screen}>
        <Text style={styles.subtitle}>Join Game.</Text>
        <View style={[styles.textFieldsBlock, styles.largeMargin]}>
          <View style={[styles.textFieldContainer, styles.largeMarginBottom]}>
            <TextInput
              multiline={false}
              onChangeText={(gameIdInput) => this.setState({ gameIdInput, error: null })}
              value={this.state.gameIdInput}
              style={styles.textField}
              keyboardType="numeric"
              placeholder="Room # (four digits)."
            />
          </View>
          <View style={styles.textFieldContainer}>
            <TextInput
              multiline={false}
              onChangeText={(name) => this.setState({ name, error: null })}
              value={this.state.name}
              style={styles.textField}
              placeholder="Name."
              onSubmitEditing={this.handleJoin}
            />
          </View>
        </View>

        <View style={styles.leftAlignNarrowContainer}>
          <Button
            onPress={this.handleJoin}
            color="#000"
            title="Join."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
          />
          <Button
            onPress={() => navigation.goBack(null)}
            color="#000"
            title="Back."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
          />
        </View>
      </View>
    );
  }
}

JoinGameScreen.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
};

const mapStateToProps = (state) => ({
  players: state.players,
  game: state.game,
});

export default connect(mapStateToProps)(JoinGameScreen);
