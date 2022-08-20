import styled from '@emotion/styled';
import { MenuItem, Menu, ListItem } from '@mui/material';

export const Wrapper = styled.div`
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 18px;
  }
`;

export const CustomMenu = styled(Menu)``;

export const CustomMenuItem = styled(ListItem)`
  padding: 2px;
  display: flex;
  text-align: center;
`;
