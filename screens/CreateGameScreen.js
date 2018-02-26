import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import socket from '../socket';
import {
  setName,
} from '../reducers/actions';
import styles from './styles';

class CreateGameScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };

  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: null,
    };
  }

  handleCreate = () => {
    if (!this.state.name) {
      this.setState({
        error: 'Must specify name before creating game',
      });
      return;
    }
    const name = this.state.name.trim();
    this.props.dispatch(setName(name));
    socket.emit('create', name);
    this.props.navigation.replace('WaitingRoom');
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.subtitle}>Create Game.</Text>
        {this.state.error &&
          <View style={styles.errorContainer}>
            <Text style={styles.content}>
              {this.state.error}
            </Text>
          </View>
        }
        <View style={[styles.textFieldContainer, styles.largeMargin]}>
          <TextInput
            multiline={false}
            onChangeText={(name) => this.setState({ name, error: null })}
            value={this.state.name}
            style={styles.textField}
            placeholder="Name."
          />
        </View>
        <View style={styles.leftAlignNarrowContainer}>
          <Button
            onPress={this.handleCreate}
            color="#000"
            title="Create."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
          />
          <Button
            onPress={() => this.props.navigation.replace('Home')}
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

const mapStateToProps = (state) => ({
  players: state.players,
  game: state.game,
});

export default connect(mapStateToProps)(CreateGameScreen);
