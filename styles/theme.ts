import { createTheme } from '@mui/material/styles';
import { COLORS } from './palette';

const deviceSizes = {
  tablet: '900px',
  mobile: '600px',
  smallMobile: '350px',
};

const device = {
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  smallMobile: `screen and (max-width: ${deviceSizes.smallMobile})`,
};

export const muiTheme = createTheme({
  ...createTheme(),
  palette: {
    primary: {
      main: COLORS.green,
      contrastText: '#fff',
    },
    secondary: {
      main: COLORS.lightGreen,
      contrastText: '#000',
    },
  },
});

export const theme = {
  device,
  colors: COLORS,
};
