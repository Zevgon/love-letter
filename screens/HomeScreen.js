import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>
          Love Letter.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.replace('CreateGame')}
            color="#000"
            title="Create."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
          />
          <Button
            onPress={() => navigation.replace('JoinGame')}
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
