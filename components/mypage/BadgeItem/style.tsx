import styled from '@emotion/styled';
import { COLORS } from '../../../styles/palette';

export const Wrapper = styled.div<{ cursor: boolean; toggle: boolean }>`
  position: relative;
  width: calc(100px + 6px);
  text-align: center;
  padding: 3px;
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
    color: ${COLORS.orange};
    font-size: 3rem;
  }
`;
