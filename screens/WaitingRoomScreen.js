import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class WaitingRoomScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Text style={[styles.subtitle, styles.largeMarginBottom]}>
          7865
        </Text>
        {this.props.players.map((player) => (
          <Text style={[styles.contentMedium, styles.marginSmall]} key={player.id}>
            {player.name}
          </Text>
        ))}
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('Game')}
            color="#000"
            title="Start Game."
            backgroundColor="transparent"
            fontSize={26}
            fontFamily="essonnes"
            disabled={this.props.players.length < 2}
            disabledStyle={styles.disabledStyle}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps)(WaitingRoomScreen);
