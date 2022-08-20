import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import { COLORS } from '../../../styles/palette';

export const modalStyle = {
  width: 350,
  p: 4,
};

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
  padding: 2px;
`;

export const Row = styled.div`
  width: 100%;
  & > div {
    svg {
      cursor: pointer;
    }
  }
`;

export const CustomedChip = styled(Chip)`
  background-color: ${COLORS.lightGreen};
  font-size: bold;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(106px, 106px));
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;

export const Spacer = styled.div`
  height: 1.5rem;
`;
