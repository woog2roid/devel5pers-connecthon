import { useRecoilValue } from 'recoil';
import Profile from '../../components/mypage/Profile';
import ProofStats from '../../components/mypage/ProofStats';
import userState from '../../store/user';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/palette';
import BadgeStats from '../../components/mypage/BadgeStats';
import CustomHead from '../../components/common/CustomHead';
import MainBadgeList from '../../components/mypage/MainBadgeList';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import BadgeSettingModal from '../../components/mypage/BadgeSettingModal';

export const MyPage = () => {
  const [open, setOpen] = useState(false);
  const user = useRecoilValue(userState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomHead title="My Page | AimEco" />
      <Wrapper>
        <Box>
          <Profile
            avatarUrl={user?.user_metadata.avatar_url}
            name={user?.user_metadata.name}
          />
          <ProofStats />
        </Box>
        <BadgeStats />
        <div>
          <Heading>
            <div>
              <h3>뱃지</h3>
              <Link href="/mypage/badges">
                <a>
                  <FiChevronRight />
                </a>
              </Link>
            </div>
            <p className="setting" onClick={handleOpen}>
              대표뱃지 설정하기
            </p>
          </Heading>
          <MainBadgeList />
        </div>
        <div>
          <Heading>
            <div>
              <h3>피드</h3>
              <Link href="/mypage/badges">
                <a>
                  <FiChevronRight />
                </a>
              </Link>
            </div>
          </Heading>
        </div>
      </Wrapper>
      <BadgeSettingModal open={open} handleClose={handleClose} />
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1rem;
  background-color: ${COLORS.cream};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  a {
    margin-top: 0.3rem;
  }
  & > div {
    display: flex;
    align-items: center;
  }
  p.setting {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.6;
    font-size: 0.8rem;
  }
`;
