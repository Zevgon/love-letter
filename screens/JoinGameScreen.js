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
      error: null,
    };
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
              value={this.state.room}
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
            onPress={() => this.props.dispatch(receivePlayers[this.state.name])}
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
