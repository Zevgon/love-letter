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
        <View style={styles.background}>
          <BackgroundCircle />
        </View>
        <Text style={styles.title}>
          Love Letter1
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            large
            onPress={() => navigate('CreateGame')}
            color="#000"
            title="Create"
            backgroundColor="transparent"
            fontFamily="cortado"
            fontSize={36}
          />
          <Button
            large
            onPress={() => navigate('JoinGame')}
            color="#000"
            title="Join"
            backgroundColor="transparent"
            fontFamily="cortado"
            fontSize={36}
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
