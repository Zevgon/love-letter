import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default class CreateGameScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Game',
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
            title="Create"
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
