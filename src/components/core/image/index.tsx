import React from 'react';
import {
  StyleSheet,
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageStyle,
} from 'react-native';

interface CustomImageProps extends RNImageProps {
  style?: ImageStyle | ImageStyle[];
}

const Image = ({style, ...props}: CustomImageProps): JSX.Element => {
  return <RNImage style={[styles.container, style]} {...props} />;
};

Image.defaultProps = {
  resizeMode: 'contain',
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export default Image;
export * from './images';
