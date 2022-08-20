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

interface propsType {
  size?: number;
}

const MainBadgeList = ({ size }: propsType) => {
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

  //Modal을 추가하면서 key가 겹치지 않도록 하기 위해서 key에 cheat을 이용
  const keyDuplicatedCheat = size ?? 0;

  return !loading ? (
    <>
      {mainBadgeList.length === 0 ? (
        <BadgeWrapper>
          <p>대표뱃지가 설정되지 않았습니다.</p>
        </BadgeWrapper>
      ) : (
        <List>
          {/* Modal을 추가하면서 key가 겹치지 않도록 하기 위해서 key에 cheat을 이용*/}
          {mainBadgeList.map((badge: ProfileBadgeMappingWithBadge) => (
            <BadgeItem
              main={true}
              badge={badge}
              key={badge.badges.id + keyDuplicatedCheat}
              cursor={false}
              size={size}
            />
          ))}
        </List>
      )}
    </>
  ) : (
    <Skeleton variant="rounded" width={'100%'} height={'6rem'} />
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

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(106px, 106px));
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;
