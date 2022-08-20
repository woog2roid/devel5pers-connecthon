import styled from '@emotion/styled';
import { MenuItem, Menu, ListItem } from '@mui/material';
import { COLORS } from '../../../styles/palette';

export const Wrapper = styled.div`
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    svg {
      color: ${COLORS.green};
    }
  }
`;

export const CustomMenu = styled(Menu)``;

export const CustomMenuItem = styled(ListItem)`
  padding: 2px;
  display: flex;
  text-align: center;
`;
