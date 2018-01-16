import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Love Letter',
    headerStyle: { display: 'none' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Love Letter</Text>
        <View style={styles.buttonContainer}>
          <Button
            large
            icon={{ name: 'user', type: 'feather', color: '#000' }}
            onPress={() => navigate('CreateGame')}
            borderRadius={5}
            containerViewStyle={{ borderRadius: 5 }}
            outline
            color="#000"
            title="Create"
            backgroundColor="#FFFFFF"
          />
          <Button
            large
            icon={{ name: 'users', type: 'feather', color: '#000' }}
            onPress={() => navigate('JoinGame')}
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

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
};
