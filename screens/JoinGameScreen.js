import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './styles';

export default class JoinGameScreen extends React.Component {
  static navigationOptions = {
    title: 'Join Game',
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      room: '',
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <View style={styles.inlineContainer}>
          <Text>
            Room:
          </Text>
          <TextInput
            multiline={false}
            onChangeText={(room) => this.setState({ room })}
            value={this.state.room}
            style={styles.textField}
          />
        </View>
        <View style={styles.inlineContainer}>
          <Text>
            Name:
          </Text>
          <TextInput
            multiline={false}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            style={styles.textField}
          />
        </View>
        <View style={styles.buttonContainer}>

          <Button
            onPress={() => navigate('Game')}
            title="Join"
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
