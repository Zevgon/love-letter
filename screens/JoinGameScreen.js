import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
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
      error: null,
    };
  }
  handleJoin = () => {
    if (!this.state.name) {
      this.setState({
        error: 'Must specify name before joining game',
      });
      return;
    } else if (!this.props.game.gameData.gameId) {
      this.setState({
        error: 'Must specify room before joining game',
      });
      return;
    }

    console.log(this.props.game.gameData.gameId);
    socket.emit('join', { id: this.props.game.gameData.gameId });
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
              onChangeText={(room) => this.setState({ room, error: null })}
              value={this.props.game.gameData.gameId}
              style={styles.textField}
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
            />
          </View>
        </View>

        <View style={styles.wideButtonContainer}>
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
