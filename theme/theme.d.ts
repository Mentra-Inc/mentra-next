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
      };
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
      };
    };
  }
}