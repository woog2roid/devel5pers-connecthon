import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getRepresentativeBadges } from '../../../apis/profile';
import { mainBadgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import BadgeItem from '../BadgeItem';

const MainBadgeList = () => {
  const user = useRecoilValue(userState);
  const [mainBadgeList, setMainBadgeList] = useRecoilState(mainBadgeListState);
  useEffect(() => {
    const getMainBadgeList = async () => {
      if (user !== null) {
        const result = await getRepresentativeBadges(user.id);
        setMainBadgeList(result);
      }
    };
    getMainBadgeList();
  }, [user]);
  return (
    <>
      <ul>
        {mainBadgeList !== null && (
          <div>
            {mainBadgeList.length === 0 ? (
              <BadgeWrapper>
                <p>대표뱃지가 설정되지 않았습니다.</p>
              </BadgeWrapper>
            ) : (
              mainBadgeList.map((badge: any) => (
                <BadgeItem
                  badge={badge.badges}
                  key={badge.badges.id}
                  cursor={false}
                  is_representative={false}
                />
              ))
            )}
          </div>
        )}
      </ul>
    </>
  );
};

export default MainBadgeList;

const BadgeWrapper = styled.div`
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;
