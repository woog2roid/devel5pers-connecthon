import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getUser } from '../../../apis/auth';
import { getBadgesByUserId } from '../../../apis/profile';
import { badgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import IBadge from '../../../types/badge';
import BadgeItem from '../BadgeItem';

interface BadgeListProps {
  cursor: boolean;
}

const BadgeList = ({ cursor }: BadgeListProps) => {
  const [user, setUser] = useRecoilState(userState);
  const [badgeList, setBadgeList] = useRecoilState(badgeListState);
  useEffect(() => {
    if (badgeList !== null) return;
    const getBadgeList = async () => {
      if (user !== null) {
        const result = await getBadgesByUserId(user.id);
        setBadgeList(result);
        //console.log(result);
      } else {
        const data = getUser();
        setUser(data);
      }
    };
    getBadgeList();
  }, [user]);
  return (
    <>
      {badgeList !== null ? (
        <List>
          {badgeList.map((badge: IBadge) => (
            <BadgeItem
              main={false}
              badge={badge}
              key={badge.badges.id}
              cursor={cursor}
            />
          ))}
        </List>
      ) : (
        <Skeleton variant="rounded" width={'100%'} height={'6rem'} />
      )}
    </>
  );
};

export default BadgeList;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(106px, 106px));
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;
