import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addPlayer } from '../reducers/actions';
import styles from './styles';

class CreateGameScreen extends React.Component {
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

    this.props.dispatch(addPlayer(this.state.name));
    this.props.navigation.navigate('WaitingRoom');
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.subtitle}>Create Game</Text>
        <View style={styles.inlineContainer}>
          <Text>
            Name:
          </Text>
          <TextInput
            multiline={false}
            onChangeText={(name) => this.setState({ name, error: null })}
            value={this.state.name}
            style={styles.textField}
          />
        </View>
        <View>
          <Text>
            {this.state.error && this.state.error}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleCreate}
            title="Create"
            backgroundColor="#FFFFFF"
          />
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
