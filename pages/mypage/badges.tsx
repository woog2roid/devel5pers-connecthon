import styled from '@emotion/styled';
import MainBadgeList from '../../components/mypage/MainBadgeList';
import BadgeList from '../../components/mypage/BadgeList';
import { COLORS } from '../../styles/palette';

const MyBadges = () => {
  return (
    <Wrapper>
      <Heading>나의 뱃지들</Heading>
      <MainBadgeList />
      <BadgeList cursor={false} />
    </Wrapper>
  );
};

export default MyBadges;

const Wrapper = styled.div`
  margin-bottom: 3rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${COLORS.green};
`;
