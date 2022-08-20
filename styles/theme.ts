import { createTheme } from '@mui/material/styles';
import { COLORS } from './palette';

export const theme = createTheme({
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
