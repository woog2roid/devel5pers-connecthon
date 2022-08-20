import styled from '@emotion/styled';
import { COLORS } from '../../../styles/palette';

export const Wrapper = styled.div<{
  cursor: boolean;
  toggle: boolean;
  main: boolean;
}>`
  position: relative;
  width: 8rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
  flex-shrink: 0;
  box-shadow: ${({ main }) => main && `1px 5px 10px rgba(0, 0, 0, 0.2)`};

  .title {
    font-size: 13px;
  }
  svg {
    display: ${({ cursor, toggle }) =>
      cursor ? (toggle ? 'block' : 'none') : 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
`;
