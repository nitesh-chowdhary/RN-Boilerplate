const PRIMARY_LIGHT = '#F58529'; // Instagram orange
const SECONDARY_LIGHT = '#D1006C'; // Instagram pink

export const light = {
  primary: PRIMARY_LIGHT,
  secondary: SECONDARY_LIGHT,
  backgroundColor: '#FFFFFF', // White background for light mode
  secondaryBackgroundColor: '#F5F5F5', // Light gray background for secondary areas
  contentBackgroundColor: '#FFFFFF', // Content background in light mode
  secondaryContentBackgroundColor: '#F1F1F1', // Slightly darker background for content sections
  contrastColor: '#000000', // Black for high contrast text
  black: '#121212', // Dark text for light mode
  white: '#FFFFFF', // White background for light theme
  disabled: '#B0B0B0', // Disabled elements in light mode
  error: '#FF3B30', // Red for errors (Instagram's error color)
  success: '#32D74B', // Green for success (Instagram's success color)
  text: {
    primary: '#121212', // Dark text for primary content
    secondary: '#4A4A4A', // Dark gray for secondary text
    gray: '#8E8E93', // Instagram's standard gray
    disabled: '#B0B0B0', // Disabled text
    link: '#F58529', // Instagram orange for links
  },
  input: {
    shade: '#E0E0E0', // Light input background
    placeholder: '#B0B0B0', // Light gray placeholder text
    border: '#E0E0E0', // Light border for inputs
    borderLight: '#B0B0B0', // Lighter border for input focus states
  },
  button: {
    border: '#D1D1D6', // Lighter border for buttons
    borderLight: '#8E8E93', // Lighter button border for hover/focus states
  },
  border: '#E0E0E0', // Light border for UI elements
  borderLight: '#B0B0B0', // Lighter border for hover/focus states
  transparent: 'transparent', // Transparent background
};
