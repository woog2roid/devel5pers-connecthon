import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getUser } from '../../../apis/auth';
import { getBadgesByUserId } from '../../../apis/profile';
import { badgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import BadgeItem from '../BadgeItem';

interface BadgeListProps {
  cursor: boolean;
}

const BadgeList = ({ cursor }: BadgeListProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [badgeList, setBadgeList] = useRecoilState(badgeListState);
  useEffect(() => {
    const getBadgeList = async () => {
      setLoading(true);
      if (user !== null) {
        const result = await getBadgesByUserId(user.id);
        setBadgeList(result);
        //console.log(result);
      } else {
        const data = getUser();
        setUser(data);
      }
      setLoading(false);
    };
    getBadgeList();
  }, [user]);
  return (
    <>
      {!loading ? (
        <List>
          {badgeList.map((badge) => (
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
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2rem;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
`;
