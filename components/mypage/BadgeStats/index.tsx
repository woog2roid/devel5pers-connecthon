import { useCallback, useEffect, useState } from 'react';
import { getBadgesByUserId } from '../../../apis/profile';
import { Wrapper } from './style';
import BadgeItem from '../BadgeItem';
import { useRecoilState } from 'recoil';
import { badgeListState } from '../../../store/badge';
import userState from '../../../store/user';
import { getUser } from '../../../apis/auth';

const BadgeStats = () => {
  const [user, setUser] = useRecoilState(userState);
  const [badges, setBadges] = useRecoilState(badgeListState);
  const [loading, setLoading] = useState(false);

  const getBadges = useCallback(async () => {
      setLoading(true);
      if (user !== null) {
        const result = await getBadgesByUserId(user?.id);
        setBadges(result);
      } else {
        const data = getUser();
        setUser(data);
      }
      setLoading(false);
  }, [setBadges, setUser, user])

  useEffect(() => {
    getBadges();
  }, [getBadges, setUser]);

  return (
    <Wrapper>
      <div>
        <p>⭐ 뱃지 개수</p>
        <p className="large">{loading ? null : `${badges.length}개`}</p>
      </div>
      <div>
        <p>🏆 최근 획득한 뱃지</p>
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
