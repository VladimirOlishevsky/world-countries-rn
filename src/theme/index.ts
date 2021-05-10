import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export interface Theme {
    dark?: boolean;
    roundness?: number;
    spacing: number,
    size: number,
    colors?: {
      primary?: string;
      background?: string;
      paper?: string;
      accent?: string;
      text?: string;
      disabled?: string;
      placeholder?: string;
    };
    fonts?: {
      regular?: string;
      medium?: string;
      light?: string;
      thin?: string;
    };
  }


declare global {
    namespace ReactNativePaper {
    //   interface ThemeFonts {
    //     superLight: ThemeFont;
    //   }
      interface ThemeColors {
        orange: string,
        white: string,
        tunaGrey: string,
        aestaticBlack: string,
        blackRussian: string
      }
    //   interface ThemeAnimation {
    //     customProperty: number;
    //   }
      interface Theme {
        spacing: number,
        size: number
      }
    }
  }

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      orange: '#ff9f0a',
      white: '#fff',
      tunaGrey: '#313133',
      aestaticBlack: '#153044',
      blackRussian: '#1c1c1e'
    },
    spacing: 8,
    size: 20
  };