import React from 'react';
import { Animated } from 'react-native';
import styles from './styles';

export default class BackgroundCircle extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0.5),
    size: new Animated.Value(26),
    borderRadius: new Animated.Value(13),
    margin: new Animated.Value(-13),
  };

  componentDidMount() {
    this.restartAnimations();
  }

  componentDidReceiveProps() {
    this.restartAnimations();
  }

  restartAnimations() {
    const finalSize = (Math.random() * 100) + 50;
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 3000,
      },
    ).start();
    Animated.timing(
      this.state.size,
      {
        toValue: finalSize,
        duration: 3000,
      },
    ).start();
    Animated.timing(
      this.state.borderRadius,
      {
        toValue: (finalSize / 2),
        duration: 3000,
      },
    ).start();
    Animated.timing(
      this.state.margin,
      {
        toValue: -(finalSize / 2),
        duration: 3000,
      },
    ).start();
  }

  render() {
    const {
      fadeAnim, size, borderRadius, margin,
    } = this.state;
    return (
      <Animated.View
        style={[styles.backgroundCircle, this.props, {
          opacity: fadeAnim, height: size, width: size, borderRadius, marginLeft: margin, marginTop: margin,
        }]}
      />
    );
  }
}
