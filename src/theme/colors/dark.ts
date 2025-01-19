const PRIMARY_DARK = '#1877F2'; // Instagram orange
const SECONDARY_DARK = '#D1006C'; // Instagram pink

export const dark = {
  primary: PRIMARY_DARK,
  secondary: SECONDARY_DARK,
  backgroundColor: '#000000', // Dark background for dark mode
  secondaryBackgroundColor: '#121212', // Slightly lighter dark background
  contentBackgroundColor: '#262626', // Background for content
  secondaryContentBackgroundColor: '#363636', // Slightly lighter content background
  contrastColor: '#FFFFFF', // White for high contrast text
  black: '#FFFFFF', // White text for dark mode
  white: '#121212', // Dark background for white theme
  disabled: '#616161', // Disabled elements in dark mode
  error: '#FF3B30', // Red for errors (Instagram's error color)
  success: '#32D74B', // Green for success (Instagram's success color)
  text: {
    primary: '#FFFFFF', // White text for dark mode
    secondary: '#D1D1D6', // Light gray for secondary text
    gray: '#8E8E93', // Instagram's standard gray
    disabled: '#616161', // Disabled text
    link: '#F58529', // Instagram orange for links
  },
  input: {
    shade: '#3A3A3C', // Dark input background
    placeholder: '#8E8E93', // Light gray placeholder text
    border: '#3A3A3C', // Dark border for inputs
    borderLight: '#8E8E93', // Lighter border
  },
  button: {
    border: '#8E8E93', // Lighter border for buttons
    borderLight: '#D1D1D6', // Lighter button border for hover/focus states
  },
  border: '#3A3A3C', // Dark border
  borderLight: '#8E8E93', // Lighter border for different UI elements
  transparent: 'transparent', // Transparent background
};
