import { useEffect } from 'react';
import { getBadgesByUserId } from '../../../apis/profile';
import { Wrapper } from './style';
import BadgeItem from '../BadgeItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { badgeListState } from '../../../store/badge';
import userState from '../../../store/user';

const BadgeStats = () => {
  const user = useRecoilValue(userState);
  const [badges, setBadges] = useRecoilState(badgeListState);

  useEffect(() => {
    if (badges === null) return;
    const getBadges = async () => {
      if (user !== null) {
        const result = await getBadgesByUserId(user?.id);
        setBadges(result);
      }
    };
    getBadges();
  }, [user]);

  return badges !== null ? (
    <Wrapper>
      <div>
        <p>⭐ 뱃지 개수</p>
        <p className="large">{badges.length}개</p>
      </div>
      <div>
        <p>🏆 최근 획득한 뱃지</p>
        <div>
          {badges.length > 0 ? (
            <BadgeItem badge={badges[0].badges} cursor={false} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Wrapper>
  ) : null;
};

export default BadgeStats;
