import { useCallback, useEffect, useState } from 'react';
import { getBadgesByUserId } from '../../../apis/profile';
import { Wrapper } from './style';
import BadgeItem from '../BadgeItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { badgeListState } from '../../../store/badge';
import userState from '../../../store/user';

const BadgeStats = () => {
  const user = useRecoilValue(userState);
  const [badges, setBadges] = useRecoilState(badgeListState);
  const [loading, setLoading] = useState(false);

  const getBadges = useCallback(async () => {
    setLoading(true);
    if (user !== null) {
      const result = await getBadgesByUserId(user?.id);
      setBadges(result);
    }
    setLoading(false);
  }, [setBadges, user]);

  useEffect(() => {
    getBadges();
  }, [getBadges]);

  return (
    <Wrapper>
      <div>
        <p>⭐ 배지 개수</p>
        <p className="large">{loading ? null : `${badges.length}개`}</p>
      </div>
      <div>
        <p>🏆 최근 획득한 배지</p>
        <div>
          {loading ? null : badges.length > 0 ? (
            <BadgeItem badge={badges[0]} cursor={false} main={false} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default BadgeStats;
