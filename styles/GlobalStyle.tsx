import { useTheme, css, Global } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @media ${theme.device.tablet} {
          html {
            font-size: 14px;
          }
        }
        @media ${theme.device.mobile} {
          html {
            font-size: 12px;
          }
        }
        @media ${theme.device.smallMobile} {
          html {
            font-size: 10px;
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
