import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getBadgesByUserId } from '../../../apis/profile';
import { badgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import BadgeItem from '../BadgeItem';

interface BadgeListProps {
  cursor: boolean;
}

const BadgeList = ({ cursor }: BadgeListProps) => {
  const user = useRecoilValue(userState);
  const [badgeList, setBadgeList] = useRecoilState(badgeListState);
  useEffect(() => {
    const getBadgeList = async () => {
      if (user !== null) {
        const result = await getBadgesByUserId(user.id);
        setBadgeList(result);
      }
    };
    getBadgeList();
  }, [user]);
  return (
    <List>
      {badgeList.map((badge: any) => (
        <BadgeItem
          badge={badge.badges}
          cursor={cursor}
          is_representative={badge.is_representative}
        />
      ))}
    </List>
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
