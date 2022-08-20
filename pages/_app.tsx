import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import Layout from '../components/Layout';
import { theme, muiTheme } from '../styles/theme';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MuiThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
