import React from 'react';
import {
  Appearance,
  StatusBar as RNStatusBar,
  StatusBarStyle,
} from 'react-native';
import {useTheme} from '../../../theme';

interface StatusBarProps {
  statusBarStyle?: StatusBarStyle;
  statusBarColor?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({
  statusBarStyle,
  statusBarColor,
}) => {
  const theme = useTheme();
  return (
    <RNStatusBar
      backgroundColor={statusBarColor ?? theme.backgroundColor}
      barStyle={
        statusBarStyle || Appearance.getColorScheme() === 'dark'
          ? 'light-content'
          : 'dark-content'
      }
      animated={true}
    />
  );
};

export default StatusBar;
