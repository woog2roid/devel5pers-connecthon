import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import { COLORS } from '../../../styles/palette';

export const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
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
