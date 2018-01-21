import React from 'react';
import { Animated } from 'react-native';
import styles from './styles';

const createAnimVals = () => ({
  fadeAnim: new Animated.Value(0.5),
  size: new Animated.Value(26),
  borderRadius: new Animated.Value(13),
  margin: new Animated.Value(-13),
});

export default class BackgroundCircle extends React.Component {
  state = {
    ...createAnimVals(),
    top: '50%',
    left: '50%',
  };

  componentDidMount() {
    this.restartAnimations();
  }

  resetStyle = () => {
    this.setState({
      top: `${(Math.random() * 100).toFixed(0)}%`,
      left: `${(Math.random() * 100).toFixed(0)}%`,
      ...createAnimVals(),
    });
  }

  restartAnimations = () => {
    const finalSize = (Math.random() * 100) + 50;
    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 3000,
        },
      ),
      Animated.timing(
        this.state.size,
        {
          toValue: finalSize,
          duration: 3000,
        },
      ),
      Animated.timing(
        this.state.borderRadius,
        {
          toValue: (finalSize / 2),
          duration: 3000,
        },
      ),
      Animated.timing(
        this.state.margin,
        {
          toValue: -(finalSize / 2),
          duration: 3000,
        },
      ),
    ]).start(() => {
      this.resetStyle();
      this.restartAnimations();
    });
  }

  render() {
    const {
      fadeAnim,
      size,
      borderRadius,
      margin,
      top,
      left,
    } = this.state;
    return (
      <Animated.View
        style={[styles.backgroundCircle, {
          opacity: fadeAnim,
          height: size,
          width: size,
          borderRadius,
          marginLeft: margin,
          marginTop: margin,
          top,
          left,
        }]}
      />
    );
  }
}
