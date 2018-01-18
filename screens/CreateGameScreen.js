import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { receivePlayers } from '../reducers/actions';
import styles from './styles';

class CreateGameScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Text style={styles.subtitle}>Create Game</Text>
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
            title="Create"
            backgroundColor="#FFFFFF"
          />
          {/* <View>
            <Button
              onPress={() => this.props.dispatch(receivePlayers(['Player 1', 'Player 2', 'Player 3']))}
              title="Test redux"
            />
            {this.props.players.map((player) => (
              <Text key={player}>
                {player}
              </Text>
            ))}
          </View> */}
        </View>
      </View>
    );
  }
}

CreateGameScreen.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
};

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps)(CreateGameScreen);
