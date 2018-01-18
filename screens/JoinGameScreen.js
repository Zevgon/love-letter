import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default class JoinGameScreen extends React.Component {
  static navigationOptions = {
    title: 'Join Game',
    headerStyle: { display: 'none' },
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
        <Text style={styles.subtitle}>Join Game</Text>
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
            onPress={() => this.props.dispatch(receivePlayers[this.state.name])}
            borderRadius={5}
            containerViewStyle={{ borderRadius: 5 }}
            outline
            color="#000"
            title="Join"
            backgroundColor="#FFFFFF"
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
