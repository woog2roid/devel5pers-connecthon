import '@emotion/react';
import { COLORS } from './palette';

declare module '@emotion/react' {
  export interface Theme {
    device: {
      tablet: string;
      mobile: string;
      smallMobile: string;
    };
    colors: typeof COLORS;
  }
}
