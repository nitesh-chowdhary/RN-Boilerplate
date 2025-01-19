import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useTheme} from '../../../theme';

interface DividerProps {
  style?: ViewStyle;
  color?: string;
  [key: string]: any;
}

const Divider: React.FC<DividerProps> = ({style, color, ...props}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          height: 1,
          width: '100%',
          backgroundColor: color || theme.borderLight,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Divider;
