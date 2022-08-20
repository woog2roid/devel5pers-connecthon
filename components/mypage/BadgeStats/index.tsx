import { useEffect, useState } from 'react';
import { getUser } from '../../../apis/auth';
import {
  getBadgesByUserId,
  getRepresentativeBadges,
} from '../../../apis/profile';
import IBadge from '../../../types/badge';
import { Wrapper } from './style';
import BadgeItem from '../BadgeItem';

const BadgeStats = () => {
  const [badges, setBadges] = useState<IBadge[]>([]);

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
  }, []);

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
            <BadgeItem
              id={badges[0].id}
              iconUrl={badges[0].iconUrl}
              name={badges[0].name}
            />
          ) : (
            <>/</>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default BadgeStats;
