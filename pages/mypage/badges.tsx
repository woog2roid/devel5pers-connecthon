import styled from '@emotion/styled';
import MainBadgeList from '../../components/mypage/MainBadgeList';
import BadgeList from '../../components/mypage/BadgeList';
import { COLORS } from '../../styles/palette';
import { useState } from 'react';
import BadgeSettingModal from '../../components/mypage/BadgeSettingModal';
import CustomHead from '../../components/common/CustomHead';

const MyBadges = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomHead title={'나의 뱃지들 | AimEco'} />
      <Wrapper>
        <Heading>나의 뱃지들</Heading>
        <MainBadgeList />
        <p onClick={handleOpen}>대표뱃지 설정하기</p>
        <BadgeList cursor={false} />
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
  }
`;

const Heading = styled.h2`
  text-align: center;
  color: ${COLORS.green};
`;
