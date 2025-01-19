import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, ViewStyle} from 'react-native';

// Define the possible safe area edges
export type ExtendedEdge = 'top' | 'bottom' | 'left' | 'right';

// Utility hook to return style for safe area insets based on the provided edges
export function useSafeAreaInsetsStyle(
  safeAreaEdges: ExtendedEdge[] = ['bottom'],
): ViewStyle {
  const insets = useSafeAreaInsets();

  // Create an object with the necessary padding for the safe area edges
  const style: ViewStyle = {};

  if (safeAreaEdges.includes('top')) {
    style.paddingTop = insets.top;
  }
  if (safeAreaEdges.includes('bottom')) {
    style.paddingBottom = insets.bottom;
  }
  if (safeAreaEdges.includes('left')) {
    style.paddingLeft = insets.left;
  }
  if (safeAreaEdges.includes('right')) {
    style.paddingRight = insets.right;
  }

  return style;
}
