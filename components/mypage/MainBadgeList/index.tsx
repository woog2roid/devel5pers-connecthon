import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getRepresentativeBadges } from '../../../apis/profile';
import { mainBadgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import IBadge from '../../../types/badge';
import BadgeItem from '../BadgeItem';

const MainBadgeList = () => {
  const user = useRecoilValue(userState);
  const [mainBadgeList, setMainBadgeList] = useRecoilState(mainBadgeListState);
  useEffect(() => {
    if (mainBadgeList !== null) return;
    const getMainBadgeList = async () => {
      if (user !== null) {
        const result = await getRepresentativeBadges(user.id);
        setMainBadgeList(result);
        console.log(result);
      }
    };
    getMainBadgeList();
  }, [user]);
  return mainBadgeList !== null ? (
    <>
      {mainBadgeList.length === 0 ? (
        <BadgeWrapper>
          <p>대표뱃지가 설정되지 않았습니다.</p>
        </BadgeWrapper>
      ) : (
        <List>
          {mainBadgeList.map((badge: IBadge) => (
            <BadgeItem
              main={true}
              badge={badge.badges}
              key={badge.badges.id}
              cursor={false}
              is_representative={false}
            />
          ))}
        </List>
      )}
    </>
  ) : null;
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

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(106px, 106px));
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;
