import styled from '@emotion/styled';

const BadgeStats = () => {
  return (
    <Wrapper>
      <div>
        <p>⭐ 뱃지 개수</p>
        <p className="large">35개</p>
      </div>
      <div>
        <p>🏆 최근 획득한 뱃지</p>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default BadgeStats;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 1rem;
  border: 1px solid lightgray;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    p.large {
      font-weight: bold;
      font-size: 1.9rem;
    }
  }
  & > div:last-child {
    border-left: 1px solid lightgray;
  }
`;
