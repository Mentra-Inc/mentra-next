import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      sizes: {
        aboutUsImg: { width: number; height: number };
        heroImg: { width: number; height: number };
        logoImg: { width: number; height: number };
        productCard: { maxWidth: number };
        aboutUsText: { maxWidth: number };
      },
      button: {
        maxWidth: string;
        maxHeight: string;
        paddingX: string;
        paddingY: string;
        borderRadius: string;
        boxShadow: string;
      },
      colors: {
        customButtonBg: string;
        customButtonHover: string;
      }
    };
  }

  interface ThemeOptions {
    custom?: {
      sizes?: {
        aboutUsImg?: { width: number; height: number };
        heroImg?: { width: number; height: number };
        logoImg?: { width: number; height: number };
        productCard?: { maxWidth: number };
        aboutUsText?: { maxWidth: number };
      },
      button?: {
        maxWidth?: string;
        maxHeight?: string;
        paddingX?: string;
        paddingY?: string;
        borderRadius?: string;
        boxShadow?: string;
      },
      colors?: {
        customButtonBg?: string;
        customButtonHover?: string;
      }
    };
  }
}