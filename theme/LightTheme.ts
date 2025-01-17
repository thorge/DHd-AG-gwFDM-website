import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const LightTheme: ThemeTypes = {
  name: 'DHd Theme',
  dark: false,
  variables: {
    'border-color': '#eeeeee',
    'border-opacity': '1',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#88153c',
    secondary: '#d4004b',
    anchor: '#2A3547',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    muted: '#5a6a85',
    lightprimary: '#ECF2FF',
    lightsecondary: '#E8F7FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    textPrimary: '#2d2c27',
    textSecondary: '#2d2c27',
    borderColor: '#e5eaef',
    inputBorder: '#000',
    containerBg: '#ffffff',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface': '#2d2c27',
    'on-surface-variant': '#fff',
    'on-background': '#2d2c27',
    grey100: '#F2F6FA',
    grey200: '#f1f2f4'
  }
};
export { LightTheme };
