import {NavigationContainer} from '@react-navigation/native';

import StackNavigatior from './StackNavigatior';
import {Appearance} from 'react-native';
import {useTheme} from '../theme';
import {StatusBar} from '../components/core';

export default function Navigation() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar />
      <StackNavigatior />
    </NavigationContainer>
  );
}
