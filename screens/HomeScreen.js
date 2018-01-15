import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Love Letter',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('CreateGame')}
            style={styles.button}
            title="Create"
          />
          <Button
            style={styles.button}
            title="Join"
          />
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
};
