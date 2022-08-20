import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  getRepresentativeBadges,
  ProfileBadgeMappingWithBadge,
} from '../../../apis/profile';
import { mainBadgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import BadgeItem from '../BadgeItem';
import { css } from '@emotion/css';

const MainBadgeList = ({ scroll }: { scroll: boolean }) => {
  const [loading, setLoading] = useState(false);
  const user = useRecoilValue(userState);
  const [mainBadgeList, setMainBadgeList] = useRecoilState(mainBadgeListState);
  useEffect(() => {
    const getMainBadgeList = async () => {
      setLoading(true);
      if (user !== null) {
        const result = await getRepresentativeBadges(user.id);
        setMainBadgeList(result);
      }
      setLoading(false);
    };
    getMainBadgeList();
  }, [user, setMainBadgeList]);
  return !loading ? (
    <>
      {mainBadgeList.length === 0 ? (
        <BadgeWrapper>
          <p>대표뱃지가 설정되지 않았습니다.</p>
        </BadgeWrapper>
      ) : (
        <ul className={scroll ? scrollStyle : notScrollStyle}>
          {mainBadgeList.map((badge: ProfileBadgeMappingWithBadge) => (
            <BadgeItem
              main={true}
              badge={badge}
              key={badge.badges.id}
              cursor={false}
            />
          ))}
        </ul>
      )}
    </>
  ) : (
    <Skeleton variant="rounded" width={'100%'} height={'6rem'} />
  );
};

export default MainBadgeList;

MainBadgeList.defaultProps = {
  scroll: false,
};

const BadgeWrapper = styled.div`
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;

const scrollStyle = css`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow-x: scroll;
  padding: 1rem 0.5rem;
`;

const notScrollStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 330px;
  margin: 0 auto;
`;
