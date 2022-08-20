import styled from '@emotion/styled';

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
`;
