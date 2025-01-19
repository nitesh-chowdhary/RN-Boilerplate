import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {s} from './scale';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const spacing = {
  xs: s(2),
  sm: s(4),
  md: s(8),
  lg: s(16),
  xl: s(24),
  '2xl': s(32),
} as const;

const flex: NamedStyles<any> = {
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
  center: {justifyContent: 'center', alignItems: 'center'},
  justifyCenter: {justifyContent: 'center'},
  alignCenter: {alignItems: 'center'},
  spaceBetween: {justifyContent: 'space-between'},
  spaceAround: {justifyContent: 'space-around'},
  spaceEvenly: {justifyContent: 'space-evenly'},
  grow: {flexGrow: 1},
  shrink: {flexShrink: 1},
};

const borderRadius: NamedStyles<any> = {
  xs: {borderRadius: s(2)},
  sm: {borderRadius: s(4)},
  md: {borderRadius: s(8)},
  lg: {borderRadius: s(16)},
  xl: {borderRadius: s(24)},
  '2xl': {borderRadius: s(32)},
};

const margin: NamedStyles<any> = {
  xs: {margin: spacing.xs},
  sm: {margin: spacing.sm},
  md: {margin: spacing.md},
  lg: {margin: spacing.lg},
  xl: {margin: spacing.xl},
};

const padding: NamedStyles<any> = {
  xs: {padding: spacing.xs},
  sm: {padding: spacing.sm},
  md: {padding: spacing.md},
  lg: {padding: spacing.lg},
  xl: {padding: spacing.xl},
};

const styles = StyleSheet.create({
  ...flex,
  ...margin,
  ...padding,
  ...borderRadius,
});

export default styles;
