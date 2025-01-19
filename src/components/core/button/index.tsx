import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from '../../../theme';
import Text from '../text';

type ButtonProps = {
  loading?: boolean;
  onPress: () => void;
  children: React.ReactNode | string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'filled' | 'outline' | 'circular' | 'link';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  loading = false,
  onPress,
  children,
  style,
  textStyle,
  variant = 'filled',
  disabled = false,
  size = 'medium',
  ...props
}) => {
  const theme = useTheme();

  const getButtonStyles = (): ViewStyle[] => {
    let baseStyles: ViewStyle[] = [styles.baseButton];

    switch (variant) {
      case 'filled':
        baseStyles.push({
          backgroundColor: theme.primary,
        });
        break;
      case 'outline':
        baseStyles.push({
          backgroundColor: theme.transparent,
          borderWidth: 1,
          borderColor: theme.button.border,
        });
        break;
      case 'link':
        baseStyles.push({
          backgroundColor: theme.transparent,
          paddingVertical: 0,
          paddingHorizontal: 0,
          alignItems: 'flex-start',
        });
        break;
      case 'circular':
        baseStyles.push({
          backgroundColor: theme.primary,
          borderRadius: 100,
          width: size === 'small' ? 40 : size === 'large' ? 60 : 50,
          height: size === 'small' ? 40 : size === 'large' ? 60 : 50,
          justifyContent: 'center',
          alignItems: 'center',
        });
        break;
      default:
        break;
    }

    if (disabled) {
      baseStyles.push({
        backgroundColor: theme.disabled,
        borderColor: theme.input.shade,
      });
    }

    return style ? [...baseStyles, style] : baseStyles;
  };

  const getTextStyles = (): TextStyle[] => {
    let baseStyles: TextStyle[] = [styles.baseText];

    switch (variant) {
      case 'filled':
      case 'circular':
        baseStyles.push({color: theme.white});
        break;
      case 'outline':
        baseStyles.push({color: theme.text.primary});
        break;
      case 'link':
        baseStyles.push({color: theme.text.link});
        break;
      default:
        break;
    }

    if (disabled) {
      baseStyles.push({color: theme.text.disabled});
    }

    return textStyle ? [...baseStyles, textStyle] : baseStyles;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={getButtonStyles()}
      activeOpacity={0.8}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.text.primary} />
      ) : typeof children === 'string' ? (
        <Text style={getTextStyles()}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
