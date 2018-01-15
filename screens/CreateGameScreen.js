import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import styles from './styles';

export default class CreateGameScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Game',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('Game')}
            style={styles.button}
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
