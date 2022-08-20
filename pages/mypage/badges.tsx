import styled from '@emotion/styled';
import MainBadgeList from '../../components/mypage/MainBadgeList';
import BadgeList from '../../components/mypage/BadgeList';
import { COLORS } from '../../styles/palette';
import { useState } from 'react';
import BadgeSettingModal from '../../components/mypage/BadgeSettingModal';
import CustomHead from '../../components/common/CustomHead';
import TopHeading from '../../components/common/TopHeading';

const MyBadges = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomHead title="나의 배지들 | AimEco" />
      <Wrapper>
        <TopHeading title="나의 배지들" to="/mypage" />
        <MainBadgeList />
        <div>
          <p onClick={handleOpen}>대표배지 설정하기</p>
          <BadgeList cursor={false} />
        </div>
      </Wrapper>
      <BadgeSettingModal open={open} handleClose={handleClose} />
    </>
  );
};

export default MyBadges;

const Wrapper = styled.div`
  margin-bottom: 3rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  p {
    cursor: pointer;
    text-align: right;
    text-decoration: underline;
    opacity: 0.6;
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
`;

const Heading = styled.h2`
  text-align: center;
  color: ${COLORS.green};
`;
