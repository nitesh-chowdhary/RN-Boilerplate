import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useTheme} from '../../../theme';
import {s} from '../../../utils/scale';
import {fonts} from '../../../utils/font';

interface TextProps extends RNTextProps {
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  fontFamily?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label';
  children: string;
}

const Text: React.FC<TextProps> = ({
  style,
  children,
  size,
  color,
  weight,
  fontFamily,
  variant,
  ...props
}) => {
  const theme = useTheme();

  const getVariantStyles = (): TextStyle => {
    switch (variant) {
      case 'heading':
        return {
          fontSize: s(24),
          fontWeight: 'bold',
          color: theme.text.primary,
        };
      case 'subheading':
        return {
          fontSize: s(18),
          fontWeight: '600',
          color: theme.text.primary,
        };
      case 'body':
        return {
          fontSize: s(14),
          fontWeight: '400',
          color: theme.text.primary,
        };
      case 'caption':
        return {
          fontSize: s(12),
          fontWeight: '300',
          color: theme.text.primary,
        };
      case 'label':
        return {
          fontSize: s(10),
          fontWeight: '500',
          color: theme.text.primary,
          textTransform: 'uppercase',
        };
      default:
        return {};
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <RNText
      style={[
        {
          fontFamily: fontFamily || fonts.primary.regular,
          fontSize: size ? s(size) : variantStyles.fontSize,
          color: color || variantStyles.color || theme.text.primary,
          fontWeight: weight || variantStyles.fontWeight,
          lineHeight: (size ? s(size) : variantStyles.fontSize || s(14)) * 1.35,
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
