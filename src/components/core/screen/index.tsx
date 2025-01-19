import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleProp,
  ViewStyle,
  Platform,
  StyleSheet,
  StatusBarStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ExtendedEdge, useSafeAreaInsetsStyle} from './useSafeAreaInsetsStyle';
import {useTheme} from '../../../theme';
import StatusBar from '../statusbar';

const isIos = Platform.OS === 'ios';

export type ScreenProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeAreaEdges?: ExtendedEdge[]; // Safe area edges to be considered (top, bottom, etc.)
  backgroundColor?: string; // Background color for the screen
  statusBarStyle?: StatusBarStyle; // Status bar style (light, dark, etc.)
  statusBarColor?: string;
  keyboardVerticalOffset?: number; // Adjust for keyboard offset
  hasInsets?: boolean; // Whether to apply insets or not
};

const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  contentContainerStyle,
  safeAreaEdges = ['bottom'],
  backgroundColor,
  statusBarStyle,
  statusBarColor,
  keyboardVerticalOffset = 0,
  hasInsets = false,
}) => {
  const theme = useTheme();
  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);
  const insets = useSafeAreaInsets();

  const keyboardVerticalOffsetCalculated = hasInsets
    ? insets.bottom + keyboardVerticalOffset
    : keyboardVerticalOffset;

  return (
    <KeyboardAvoidingView
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffsetCalculated}
      style={[
        styles.container,
        {backgroundColor: theme.backgroundColor || backgroundColor},
      ]}>
      <StatusBar
        statusBarStyle={statusBarStyle}
        statusBarColor={statusBarColor}
      />
      <View
        style={[
          {backgroundColor: theme.backgroundColor},
          styles.innerContainer,
          containerInsets,
          contentContainerStyle,
        ]}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});

export default Screen;
