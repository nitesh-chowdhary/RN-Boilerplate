import {Appearance, ColorSchemeName} from 'react-native';
import {light} from './colors/light';
import {dark} from './colors/dark';
import {useEffect, useState} from 'react';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(
    Appearance.getColorScheme() === 'dark' ? dark : light,
  );

  useEffect(() => {
    const updateTheme = ({colorScheme}: {colorScheme: ColorSchemeName}) => {
      setCurrentTheme(colorScheme === 'dark' ? dark : light);
    };

    const subscription = Appearance.addChangeListener(updateTheme);

    return () => {
      subscription.remove();
    };
  }, []);

  return currentTheme;
};
