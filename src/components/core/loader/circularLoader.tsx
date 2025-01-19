import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

interface CustomBouncingLoaderProps {
  size?: number; // Size of each dot
  color?: string; // Color of each dot
  style?: object; // Custom style for the loader container
}

const BouncingLoader: React.FC<CustomBouncingLoaderProps> = ({
  size = 10,
  color = '#68590A', // Default color is blue
  style,
}) => {
  const bounceAnim1 = useRef(new Animated.Value(0)).current;
  const bounceAnim2 = useRef(new Animated.Value(0)).current;
  const bounceAnim3 = useRef(new Animated.Value(0)).current;

  // Create bouncing animation for each dot
  const bounce = (anim: Animated.Value) => {
    return Animated.sequence([
      Animated.timing(anim, {
        toValue: -10,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(anim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);
  };

  useEffect(() => {
    // Start bouncing animations for each dot
    Animated.loop(
      Animated.stagger(300, [
        bounce(bounceAnim1),
        bounce(bounceAnim2),
        bounce(bounceAnim3),
      ]),
    ).start();
  }, [bounceAnim1, bounceAnim2, bounceAnim3]);

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.dot,
          {width: size, height: size, backgroundColor: color},
          {transform: [{translateY: bounceAnim1}]},
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {width: size, height: size, backgroundColor: color},
          {transform: [{translateY: bounceAnim2}]},
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {width: size, height: size, backgroundColor: color},
          {transform: [{translateY: bounceAnim3}]},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: '#3498db',
    marginHorizontal: 2, // Reduced gap between dots
  },
});

export default BouncingLoader;
