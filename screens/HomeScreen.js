import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import BackgroundCircle from './BackgroundCircle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>
          Love Letter.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('CreateGame')}
            color="#000"
            title="Create."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
          />
          <Button
            onPress={() => navigate('JoinGame')}
            color="#000"
            title="Join."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
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
