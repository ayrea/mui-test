import { PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // Augment the PaletteColor interface
  interface PaletteColor {
    veryLight?: string; // Custom property 'veryLight'
  }
}
