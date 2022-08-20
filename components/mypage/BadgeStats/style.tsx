import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 1rem;
  border: 1px solid lightgray;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 1rem 0;
    p.large {
      font-weight: bold;
      font-size: 1.9rem;
      margin: 2rem 0;
    }
  }
  & > div:last-child {
    border-left: 1px solid lightgray;
  }
`;
