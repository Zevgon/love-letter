import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';

class WaitingRoomScreen extends React.Component {
  static navigationOptions = {
    title: 'Love Letter',
  };
  render() {
    return (
      <View style={styles.screen}>
        {this.props.players.map((player) => (
          <Text key={player.id}>
            {player.name}
          </Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps)(WaitingRoomScreen);
