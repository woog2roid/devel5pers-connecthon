import styled from '@emotion/styled';
import React from 'react';

const Layout = ({ children }: React.PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  max-width: 360px;
  width: 90vw;
  margin: 0 auto;
`;
