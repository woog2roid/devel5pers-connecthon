import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import { getBadgesByUserId } from '../../../apis/profile';
import IBadge from '../../../types/badge';
import { Wrapper } from './style';
import BadgeItem from '../BadgeItem';
import { useRecoilState } from 'recoil';
import { badgeListState } from '../../../store/badge';

const BadgeStats = () => {
  const [badges, setBadges] = useRecoilState<IBadge[]>(badgeListState);

  useEffect(() => {
    const getBadges = async () => {
      const user = await getUser();
      if (user !== null) {
        const reuslt = await getBadgesByUserId(user?.id);
        const refinedData = reuslt.map((data) => ({
          id: data.badges.id,
          iconUrl: data.badges.iconUrl ?? '',
          name: data.badges.name ?? '',
        }));
        setBadges(refinedData);
      }
    };
    getBadges();
  }, [setBadges]);

  return (
    <Wrapper>
      <div>
        <p>⭐ 뱃지 개수</p>
        <p className="large">{badges.length}개</p>
      </div>
      <div>
        <p>🏆 최근 획득한 뱃지</p>
        <div>
          {badges.length > 0 ? (
            <BadgeItem badge={badges[0]} cursor={false} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default BadgeStats;
